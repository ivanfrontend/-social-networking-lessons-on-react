import React from 'react';
// import UsersAPIComponents from './UsersAPIComponents';
import { connect } from 'react-redux';
import { followedAC, unfollowedAC, setUsersAC, setCurrentPageAC, setTottalUsersCountAC, toggleIsfetchingAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/preloader'



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsfetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.toggleIsfetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTottalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsfetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
            this.props.toggleIsfetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        
        return <>
        {this.props.isFetching &&  <Preloader /> }
        <Users 
        onPageChanged={this.onPageChanged}  
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        isFetching={this.props.isFetching}

        />
        </>
    }
}

let mapStateToProps = (state) => {
 return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUsersCount: state.usersPage.totalUsersCount,
     currentPage: state.usersPage.currentPage,
     isFetching: state.usersPage.isFetching
 }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (userId) => {dispatch(followedAC(userId))},
        unfollow: (userId) => {dispatch(unfollowedAC(userId))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTottalUsersCount: (totalCount) => {dispatch(setTottalUsersCountAC(totalCount))},
        toggleIsfetching: (isFetching) => {dispatch(toggleIsfetchingAC(isFetching))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);