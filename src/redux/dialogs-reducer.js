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
    ]
};

 const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:

                return{
                    ...state,
                    massage: [...state.massage, {id: 6, massage : action.newMessageBody}]
                }
        default:
        return state;
    }

}


export const sendMessageCreator = (newMessageBody) =>({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;