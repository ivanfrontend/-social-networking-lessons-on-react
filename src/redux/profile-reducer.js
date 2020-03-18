const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';

let initialState = {
    post:  [
        {id: 1, post: 'hi', likecount: 19},
        {id: 2, post: 'i\'am fine', likecount: 15},
        {id: 3, post: 'yo', likecount: 8}
    ],
    newPostText: 'Value default'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
        let newPost ={
            id: 4,
            post: state.newPostText,
            likecount: 0
        }
        state.post.push(newPost);
        state.newPostText = '';
        return state;

        case NEW_POST: 
        state.newPostText = action.textUser; 
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