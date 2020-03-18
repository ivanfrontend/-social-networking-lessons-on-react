import React from 'react';
import Post from './Post/Post'
import {AddPostActionCreator, NewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';


// let addPost = React.createRef();

let MyPostsContainer = (props) =>{
    // debugger
    let state = props.store.getState();

    // let posts = props.dataPost.post.map( post => <Post massage={post.post} like={post.likecount} />);
    let addPost = () =>{
        //props.addPost();
        props.store.dispatch(AddPostActionCreator());
    }

    let onPostChange = (text) => {
        // let text = e.target.value;
        //props.newPost(text);
        props.store.dispatch(NewPostActionCreator(text));
    }
    return(<MyPosts 
        updateNewPostText={onPostChange} 
        addPost={addPost} 
        posts={state.profilePage.post} 
        newPostText={state.profilePage.newPostText} />);
}


export default MyPostsContainer;