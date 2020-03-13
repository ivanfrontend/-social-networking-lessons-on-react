const ADD_POST = 'ADD-POST';
const NEW_POST = 'NEW-POST';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            post:  [
                {id: 1, post: 'hi', likecount: 19},
                {id: 2, post: 'i\'am fine', likecount: 15},
                {id: 3, post: 'yo', likecount: 8}
            ],
            newpost: 'Value default'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Vanya'},
                {id: 4, name: 'Stas'}

            ],
            massage: [
                {id: 1, massage : 'Hi'},
                {id: 2, massage : 'How are you'},
                {id: 3, massage : 'Fine'},
                {id: 4, massage : 'Thank'},
                {id: 5, massage : '!!!'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            firend: [
                {id: 1, name : 'Vanya'},
                {id: 2, name : 'Yan'},
                {id: 3, name : 'Jenya'},
            ]
        }
    },
    _callSubscriber(){
        console.log('State change');
    },

    getState(){
         return this._state;
    },
    subscribe (observer){
        this._callSubscriber  = observer;
    },

    addPost(){
        let newPost ={
            id: 4,
            post: this._state.profilePage.newpost,
            likecount: 0
        }
        this._state.profilePage.post.push(newPost);
        this._state.profilePage.newpost = '';
        this._callSubscriber(this._state);
    },
    NewPost(textUser){
            let newPost = textUser;
            this._state.profilePage.newpost = newPost;
            this._callSubscriber(this._state);
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost ={
                id: 4,
                post: this._state.profilePage.newpost,
                likecount: 0
            }
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newpost = '';
            this._callSubscriber(this._state);
        }else if(action.type === NEW_POST){
            let newPost = action.textUser;
            this._state.profilePage.newpost = newPost;
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.massage.push({id: 6, massage : body});
            this._callSubscriber(this._state);
        }
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

export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })


export default store;



//
// let renderTree = () =>{
//     console.log('State change');
// }
//
// let state = {
//     profilePage: {
//         post:  [
//             {id: 1, post: 'hi', likecount: 19},
//             {id: 2, post: 'i\'am fine', likecount: 15},
//             {id: 3, post: 'yo', likecount: 8}
//     ],
//        newpost: 'Value default'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Sveta'},
//             {id: 3, name: 'Vanya'},
//             {id: 4, name: 'Stas'}
//
//         ],
//         massage: [
//             {id: 1, massage : 'Hi'},
//             {id: 2, massage : 'How are you'},
//             {id: 3, massage : 'Fine'},
//             {id: 4, massage : 'Thank'},
//             {id: 5, massage : '!!!'}
//     ]
//     },
//     sidebar: {
//         firend: [
//             {id: 1, name : 'Vanya'},
//             {id: 2, name : 'Yan'},
//             {id: 3, name : 'Jenya'},
//         ]
//     }
// };
// export default state;
//
//
// export let addPost = () => {
//     let newPost ={
//         id: 4,
//         post: state.profilePage.newpost,
//         likecount: 0
//     }
//     state.profilePage.post.push(newPost);
//     state.profilePage.newpost = '';
//     renderTree(state);
// };
//
//
// export let NewPost = (textUser) => {
//     let newPost = textUser;
//
//     state.profilePage.newpost = newPost;
//     renderTree(state);
// };
//
//
// export let subscribe = (observer) =>{
//     renderTree = observer;
// }