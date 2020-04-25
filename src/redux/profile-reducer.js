import { usersAPI, prifileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';
const STE_USER_FROFILE = 'STE_USER_FROFILE';
const STE_STATUS = 'STE_STATUS';

let initialState = {
    post:  [
        {id: 1, post: 'hi', likecount: 19},
        {id: 2, post: 'i\'am fine', likecount: 15},
        {id: 3, post: 'yo', likecount: 8}
    ],
    newPostText: 'Value default',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                post: [...state.post, {id: 4, post: state.newPostText, likecount: 0}],
                newPostText: ''
            }
        case NEW_POST: 
        return{
            ...state,
            newPostText: action.textUser
        }
        case STE_USER_FROFILE:
        return{
            ...state, 
            profile: action.profile
        }
        case STE_STATUS:
        return{
            ...state, 
            status: action.status
        }
        default : 
        return state; 
    }

}


export const AddPostActionCreator = () =>{
    return{ type: ADD_POST}
}


export const NewPostActionCreator = (text) =>({ type: NEW_POST, textUser: text})
export const setUserProfile = (profile) => ({type: STE_USER_FROFILE, profile}) 
export const setStatus = (status) => ({type: STE_STATUS, status}) 
export const getUserProfile = (userId) => (dispatch) => {
    prifileAPI.getProfile(userId).then( data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    prifileAPI.getStatus(userId).then( data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    prifileAPI.updateStatus(status).then( data => {
        if(data.resultCode === 0){
            dispatch(setStatus(status))
        }
        
    })
}

export default profileReducer;