const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';

const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
        let newPost ={
            id: 4,
            post: state.newpost,
            likecount: 0
        }
        state.post.push(newPost);
        state.newpost = '';
        return state;

        case NEW_POST: 
        let newPostText = action.textUser;
        state.newpost = newPostText; 
        return state; 

        default : 
        return state; 
    }

    // if(action.type === ADD_POST){
    //     let newPost ={
    //         id: 4,
    //         post: state.newpost,
    //         likecount: 0
    //     }
    //     state.post.push(newPost);
    //     state.newpost = '';
    // }else if(action.type === NEW_POST){
    //     let newPost = action.textUser;
    //     state.newpost = newPost;
    // }


}


export const AddPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}


export const NewPostActionCreator = (text) =>{
    return{
        type: NEW_POST,
        textUser: text
    }
}

export default profileReducer;