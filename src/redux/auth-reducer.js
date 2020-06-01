import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

 const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return{
                ...state,
                ...action.payload
            }
        default:
        return state;
    }

}


export const setUserData = (id, email, login, isAuth) => ( {type: SET_USER_DATA, payload: {id, email, login, isAuth}} );
export const getCaptchaSuccess = (captchaUrl) => ( {type: GET_CAPTCHA_URL, payload: {captchaUrl}} );
export const getUserData = () => async (dispatch) => {
    let data = await authAPI.auth()
        if(data.resultCode === 0){
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        }
  
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
        if(data.resultCode === 0){
            dispatch(getUserData())
        }else {
            if(data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0 ? data.messages : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
} 
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
        if(data.resultCode === 0){
            dispatch(setUserData(null, null, null, false))
        }
} 


export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    
    const captcha = data.url
    dispatch(getCaptchaSuccess(captcha))
} 

export default authReducer;