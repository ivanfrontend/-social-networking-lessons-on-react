import {prifileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const STE_USER_FROFILE = 'STE_USER_FROFILE';
const STE_STATUS = 'STE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    post:  [
        {id: 1, post: 'hi', likecount: 19},
        {id: 2, post: 'i\'am fine', likecount: 15},
        {id: 3, post: 'yo', likecount: 8}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                post: [...state.post, {id: 4, post: action.newPostText, likecount: 0}],
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
        case DELETE_POST: 
        return{ ...state, post: state.post.filter( p => p.id != action.postId ) }
        case SAVE_PHOTO_SUCCESS:
        return{...state, profile: {...state.profile, photos: action.photos}}
        default : 
        return state; 
    }

}


export const AddPost = (newPostText) =>({ type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: STE_USER_FROFILE, profile}) 
export const setStatus = (status) => ({type: STE_STATUS, status}) 
export const deletePost = (postId) => ({type: DELETE_POST, postId}) 
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos}) 

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await prifileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
}
export const getStatus = (userId) => async (dispatch) => {
   let data = await prifileAPI.getStatus(userId)
        dispatch(setStatus(data))
}
export const updateStatus = (status) => async (dispatch) => {
   let data = await prifileAPI.updateStatus(status)
        if(data.resultCode === 0){
            dispatch(setStatus(status))
        }
}

export const savePhoto = (file) => async (dispatch) => {
    let data = await prifileAPI.savePhoto(file)
         if(data.resultCode === 0){
             dispatch(savePhotoSuccess(data.data.photos))
         }
 }

export default profileReducer;