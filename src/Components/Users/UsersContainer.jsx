import React from 'react';
import { connect } from 'react-redux';
import { followed, unfollowed, setCurrentPage,  togglefollowingProgress, getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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


export default connect(mapStateToProps, {
    followed,
    unfollowed,
    setCurrentPage,
    togglefollowingProgress,
    getUsers
})(UsersContainer);