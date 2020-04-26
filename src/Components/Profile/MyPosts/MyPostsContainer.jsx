import {AddPost} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
};



const MyPostsContainer = connect(mapStateToProps, {AddPost})(MyPosts);

export default MyPostsContainer;