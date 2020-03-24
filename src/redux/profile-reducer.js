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
            return{
                ...state,
                post: [...state.post, {id: 4, post: state.newPostText, likecount: 0}],
                newPostText: ''
            }
        case NEW_POST: 
        return{
            ...state,
            newPostText: action.textUser
        }
        default : 
        return state; 
    }

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