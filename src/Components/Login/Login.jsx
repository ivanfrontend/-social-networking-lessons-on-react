import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLenght } from '../../utils/validators/validators';

const maxLength10 = maxLenght(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field 
            component={Input}
            validate={[required, maxLength10]}
            placeholder="Login" 
            name={'login'}  
            /></div>
            <div><Field 
            component={Input}
            validate={[required, maxLength10]}
            placeholder="Password" 
            name={'Password'}  
            /></div>
            <div><Field 
            component={Input}
            type={'checkbox'} 
            name={'rememberMe'} 
            /> remember me </div>
            <div><button>login</button></div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
    <>
        <h1>Login page</h1>
        <LoginRedaxForm onSubmit={onSubmit} />
    </>
    )
}





export default Login;