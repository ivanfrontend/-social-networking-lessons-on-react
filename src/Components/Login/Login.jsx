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

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
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
            {props.error &&  <div className={s.form_summary_error}>{props.error}</div>}
                
            
            <div><button>login</button></div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData); 
        props.login(formData.login, formData.Password, formData.rememberMe)
    }

    if(props.isAuth) return <Redirect to='/profile' />
    return (
    <>
        <h1>Login page</h1>
        <LoginRedaxForm onSubmit={onSubmit} />
    </>
    )
}


let matStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
} 

export default compose(
    connect(matStateToProps, {login})
)(Login);