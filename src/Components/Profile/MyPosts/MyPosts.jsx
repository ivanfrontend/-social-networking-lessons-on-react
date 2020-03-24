import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {AddPostActionCreator, NewPostActionCreator} from "../../../redux/profile-reducer";


// let addPost = React.createRef();

let MyPosts = (props) =>{
    
    let posts = props.posts.map( post => <Post massage={post.post} key={post.id} like={post.likecount} />);

    let onAddPost = () =>{
        props.addPost();
        //props.dispatch(AddPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        //props.newPost(text);
        props.updateNewPostText(text);
        //props.dispatch(NewPostActionCreator(text));
    }
    return(
        
            <div>
            <textarea onChange={onPostChange}  value={props.newPostText}></textarea>
            <button onClick={onAddPost}>Add</button>
            <div>MyPosts</div>
                {posts}
            </div>
         
    );
}


export default MyPosts;