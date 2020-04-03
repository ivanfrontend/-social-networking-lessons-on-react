import Users from './Users';
import { connect } from 'react-redux';
import { followedAC, unfollowedAC, setUsersAC, setCurrentPageAC, setTottalUsersCountAC } from '../../redux/users-reducer';


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;