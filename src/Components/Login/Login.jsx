import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLenght } from '../../utils/validators/validators';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer' 
import { Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css';

const maxLength50 = maxLenght(50)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div><Field 
            component={Input}
            validate={[required, maxLength50]}
            placeholder="Login" 
            name={'login'}  
            /></div>
            <div><Field 
            component={Input}
            validate={[required, maxLength50]}
            placeholder="Password" 
            name={'Password'}  
            type={'password'}
            /></div>
            <div><Field 
            component={Input}
            type={'checkbox'} 
            name={'rememberMe'} 
            /> remember me </div>
            { captchaUrl && <img src={captchaUrl} /> }
            { captchaUrl && 
            <div><Field 
            component={Input}
            validate={[required]}
            placeholder="Captcha" 
            name={'captcha'}  
            /></div> }
            {error &&  <div className={s.form_summary_error}>{error}</div>}
                
            
            <div><button>login</button></div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.Password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) return <Redirect to='/profile' />
    return (
    <>
        <h1>Login page</h1>
        <LoginRedaxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
    )
}


let matStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
} 

export default compose(
    connect(matStateToProps, {login})
)(Login);