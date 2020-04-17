import React from 'react';
import { connect } from 'react-redux';
import { followed, unfollowed, setUsers, setCurrentPage, setTottalUsersCount, toggleIsfetching, togglefollowingProgress } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { isersAPI } from '../../api/api';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsfetching(true)

        isersAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data => {
            this.props.toggleIsfetching(false)
            this.props.setUsers(data.items)
            this.props.setTottalUsersCount(data.totalCount)
        })

        
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsfetching(true)
        isersAPI.getUsers(pageNumber, this.props.pageSize).then( data => {
            this.props.toggleIsfetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {

        
        return <>
        {this.props.isFetching &&  <Preloader /> }
        <Users 
        onPageChanged={this.onPageChanged}  
        unfollow={this.props.unfollowed}
        follow={this.props.followed}
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        isFetching={this.props.isFetching}
        togglefollowingProgress={this.props.togglefollowingProgress}
        followingInProgress={this.props.followingInProgress}

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
     isFetching: state.usersPage.isFetching,
     followingInProgress: state.usersPage.followingInProgress
 }
}


// let mapDispatchToProps = (dispatch) => {
//     return{
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         follow: (userId) => {dispatch(followedAC(userId))},
//         unfollow: (userId) => {dispatch(unfollowedAC(userId))},
//         setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
//         setTottalUsersCount: (totalCount) => {dispatch(setTottalUsersCountAC(totalCount))},
//         toggleIsfetching: (isFetching) => {dispatch(toggleIsfetchingAC(isFetching))}
//     }
// }


export default connect(mapStateToProps, {
    setUsers,
    followed,
    unfollowed,
    setCurrentPage,
    setTottalUsersCount,
    toggleIsfetching,
    togglefollowingProgress
})(UsersContainer);