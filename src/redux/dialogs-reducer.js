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
        case UPDATE_NEW_MESSAGE_BODY:{
        let stateCopy = {...state};
        stateCopy.newMessageBody = action.body;   
        return stateCopy;
        }
        case SEND_MESSAGE:{
        let stateCopy = {...state};
        let body = stateCopy.newMessageBody;
        stateCopy.newMessageBody = '';
        stateCopy.massage = [...state.massage];
        stateCopy.massage.push({id: 6, massage : body});
        return stateCopy
        }
        default:
        return state;
    }

    // if(action.type === UPDATE_NEW_MESSAGE_BODY){
    //     state.newMessageBody = action.body;
    // }else if(action.type === SEND_MESSAGE){
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.massage.push({id: 6, massage : body});
    // }

    // return state;

}


export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default dialogsReducer;