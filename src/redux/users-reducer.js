const FOLLOWE = 'FOLLOWE';
const UNFOLLOWE = 'UNFOLLOWE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTTAL_USERS_COUNT = 'SET_TOTTAL_USERS_COUNT';

let initialState = {
    users:  [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};

 const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOWE:
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u 
                })
            }
        case UNFOLLOWE:
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u 
                })
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
        default:
        return state;
    }

}


export const followedAC = (userId) => ( {type: FOLLOWE, userId} );
export const unfollowedAC = (userId) => ( {type: UNFOLLOWE, userId} );
export const setUsersAC = (users) => ( {type: SET_USERS, users } );
export const setCurrentPageAC = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage } );
export const setTottalUsersCountAC = (totalCount) => ( {type: SET_TOTTAL_USERS_COUNT, totalCount } );
// export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default usersReducer;