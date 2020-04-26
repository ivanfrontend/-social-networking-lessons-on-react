import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field placeholder="Login" name={'login'}  component={'input'}/></div>
            <div><Field placeholder="Password" name={'Password'}  component={'input'} /></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me </div>
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