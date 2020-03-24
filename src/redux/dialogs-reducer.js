const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

 const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
        return{
            ...state, 
            newMessageBody: action.body
        }
        case SEND_MESSAGE:
                return{
                    ...state,
                    massage: [...state.massage, {id: 6, massage : state.newMessageBody}],
                    newMessageBody: ''
                }
        default:
        return state;
    }

}


export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default dialogsReducer;