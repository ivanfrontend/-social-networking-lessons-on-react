const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;   
        return state;

        case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.massage.push({id: 6, massage : body});
        return state

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