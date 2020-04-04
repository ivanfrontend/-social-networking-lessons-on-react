import React from 'react';
// import UsersAPIComponents from './UsersAPIComponents';
import { connect } from 'react-redux';
import { followedAC, unfollowedAC, setUsersAC, setCurrentPageAC, setTottalUsersCountAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';



class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
            this.props.setTottalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        
        return <Users 
        onPageChanged={this.onPageChanged}  
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}

        />
    }
}

let mapStateToProps = (state) => {
 return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUsersCount: state.usersPage.totalUsersCount,
     currentPage: state.usersPage.currentPage
 }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (userId) => {dispatch(followedAC(userId))},
        unfollow: (userId) => {dispatch(unfollowedAC(userId))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTottalUsersCount: (totalCount) => {dispatch(setTottalUsersCountAC(totalCount))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);