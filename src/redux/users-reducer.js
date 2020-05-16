import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object_helpers";

const FOLLOWE = 'FOLLOWE';
const UNFOLLOWE = 'UNFOLLOWE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTTAL_USERS_COUNT = 'SET_TOTTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users:  [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

 const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOWE:
            return{
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}) 
            }
        case UNFOLLOWE:
            return{
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return{
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId ]  
                : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
        return state;
    }

}


export const followedSuccess = (userId) => ( {type: FOLLOWE, userId} );
export const unfollowedSuccess = (userId) => ( {type: UNFOLLOWE, userId} );
export const setUsers = (users) => ( {type: SET_USERS, users } );
export const setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage } );
export const setTottalUsersCount = (totalCount) => ( {type: SET_TOTTAL_USERS_COUNT, totalCount } );
export const toggleIsfetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const togglefollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
 return async (dispatch) => {
        dispatch(toggleIsfetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsfetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTottalUsersCount(data.totalCount))
    }
}



const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(togglefollowingProgress(true, userId))
    let data = await apiMethod(userId)
         if(data.resultCode == 0){
             dispatch(actionCreater(userId))
         } 
         dispatch(togglefollowingProgress(false, userId))
}

export const followed = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followedSuccess)

       }
   }

export const unfollowed = (userId) => {
return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowedSuccess)
    }
}


// export const followed = (userId) => {
//     return async (dispatch) => {
//         dispatch(togglefollowingProgress(true, userId))
//        let data = await usersAPI.follow(userId)
//             if(data.resultCode == 0){
//                 dispatch(followedSuccess(userId))
//             } 
//             dispatch(togglefollowingProgress(false, userId))
//        }
//    }

// export const unfollowed = (userId) => {
// return async (dispatch) => {
//         dispatch(togglefollowingProgress(true, userId))
//        let data = await usersAPI.unfollow(userId)
//             if(data.resultCode == 0){
//                 dispatch(unfollowedSuccess(userId))  
//             }
//             dispatch(togglefollowingProgress(false, userId))
//     }
// }




// case FOLLOWE:
//             return{
//                 ...state,
//                 users: state.users.map( u => {
//                     if(u.id === action.userId){
//                         return {...u, followed: true}
//                     }
//                     return u 
//                 })
//             }
//         case UNFOLLOWE:
//             return{
//                 ...state,
//                 users: state.users.map( u => {
//                     if(u.id === action.userId){
//                         return {...u, followed: false}
//                     }
//                     return u 
//                 })
//             }



// export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default usersReducer;