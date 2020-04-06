const FOLLOWE = 'FOLLOWE';
const UNFOLLOWE = 'UNFOLLOWE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTTAL_USERS_COUNT = 'SET_TOTTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users:  [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
        return state;
    }

}


export const followed = (userId) => ( {type: FOLLOWE, userId} );
export const unfollowed = (userId) => ( {type: UNFOLLOWE, userId} );
export const setUsers = (users) => ( {type: SET_USERS, users } );
export const setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage } );
export const setTottalUsersCount = (totalCount) => ( {type: SET_TOTTAL_USERS_COUNT, totalCount } );
export const toggleIsfetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

// export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default usersReducer;