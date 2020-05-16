import React from 'react';
import { connect } from 'react-redux';
import { followed, unfollowed, setCurrentPage,  togglefollowingProgress, getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { getPageSize, getUsersInfo, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectrors';



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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

// let mapStateToProps = (state) => {
//  return {
//      users: state.usersPage.users,
//      pageSize: state.usersPage.pageSize,
//      totalUsersCount: state.usersPage.totalUsersCount,
//      currentPage: state.usersPage.currentPage,
//      isFetching: state.usersPage.isFetching,
//      followingInProgress: state.usersPage.followingInProgress
//  }
// }

let mapStateToProps = (state) => {
 return {
     users: getUsersInfo(state),
     pageSize: getPageSize(state),
     totalUsersCount: getTotalUsersCount(state),
     currentPage: getCurrentPage(state),
     isFetching: getIsFetching(state),
     followingInProgress: getFollowingInProgress(state)
 }
}

export default connect(mapStateToProps, {
    followed,
    unfollowed,
    setCurrentPage,
    togglefollowingProgress,
    getUsers
})(UsersContainer);