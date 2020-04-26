import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPostText'} placeholder={'add post'} />
            <button >Add</button>
        </form>
    )
}
const MyPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
let MyPosts = (props) =>{
    
    let posts = props.posts.map( post => <Post massage={post.post} key={post.id} like={post.likecount} />);

    let onAddPost = (values) => {
        console.log(values);
        props.AddPost(values.newPostText);
    }

    return(
        
            <div>
            <MyPostReduxForm onSubmit={onAddPost} />
            <div>MyPosts</div>
                {posts}
            </div>
         
    );
}

export default MyPosts;