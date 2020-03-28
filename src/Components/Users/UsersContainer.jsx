import Users from './Users';
import { connect } from 'react-redux';
import { followedAC, unfollowedAC, setUsersAC } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
 return {
     users: state.usersPage.users
 }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (userId) => {dispatch(followedAC(userId))},
        unfollow: (userId) => {dispatch(unfollowedAC(userId))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;