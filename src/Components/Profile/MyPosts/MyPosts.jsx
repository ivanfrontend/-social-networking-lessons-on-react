import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {AddPostActionCreator, NewPostActionCreator} from "../../../redux/state";


// let addPost = React.createRef();

let MyPosts = (props) =>{
    let posts = props.dataPost.post.map( post => <Post massage={post.post} like={post.likecount} />);
    let addButton = () =>{
        //props.addPost();
        props.dispatch(AddPostActionCreator());
    }

    let changeText = (e) => {
        let text = e.target.value;
        //props.newPost(text);
        props.dispatch(NewPostActionCreator(text));
    }
    return(
        
            <div>
            <textarea onChange={changeText}  value={props.dataPost.newpost}></textarea>
            <button onClick={addButton}>Add</button>
            <div>MyPosts</div>
                {posts}
            </div>
         
    );
}


export default MyPosts;