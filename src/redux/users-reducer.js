const FOLLOWE = 'FOLLOWE';
const UNFOLLOWE = 'UNFOLLOWE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:  []
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
                users: [...state.users, ...action.users] 
            }
        default:
        return state;
    }

}


export const followedAC = (userId) => ( {type: FOLLOWE, userId} );
export const unfollowedAC = (userId) => ( {type: UNFOLLOWE, userId} );
export const setUsersAC = (users) => ( {type: SET_USERS, users } );
// export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default usersReducer;