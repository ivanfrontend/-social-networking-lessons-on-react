import React from 'react';
import Post from './Post/Post'
import {AddPostActionCreator, NewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


let MyPostsContainer = (props) =>{    
    return( <StoreContext.Consumer >  
        {
            (store) => {
                let state = store.getState();
                let addPost = () =>{
                    store.dispatch(AddPostActionCreator());
                }
            
                let onPostChange = (text) => {
                    store.dispatch(NewPostActionCreator(text));
                }
              return  <MyPosts 
                    updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    posts={state.profilePage.post} 
                    newPostText={state.profilePage.newPostText} /> 
            } 
        }
         </StoreContext.Consumer>
        );
}


export default MyPostsContainer;