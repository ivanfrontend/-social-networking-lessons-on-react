import {AddPostActionCreator, NewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(NewPostActionCreator(text))},
        addPost: () => {dispatch(AddPostActionCreator())}
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;