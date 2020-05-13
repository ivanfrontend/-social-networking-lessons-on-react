import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLenght } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength10 = maxLenght(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
            component={Textarea} 
            name={'newPostText'} 
            placeholder={'add post'} 
            validate={[required, maxLength10]}
            />
            <button >Add</button>
        </form>
    )
}
const MyPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
// PureComponent // Для класовой компоненты наследоваться из PureComponent также надо сделать import React, {PureComponent} from 'react';
let MyPosts = React.memo((props) =>{
    
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
})

export default MyPosts;