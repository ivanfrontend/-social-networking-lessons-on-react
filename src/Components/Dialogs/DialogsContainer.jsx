import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {NavLink} from "react-router-dom";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
// let addText = React.createRef();

const DialogsContainer = () => {
    return ( <StoreContext.Consumer >  
        {
        (store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs 
            updateNewMessageBody={onNewMessageChange} 
            sendMessage={onSendMessageClick}
            dialogsPage={state} />
        }
     
    }
     </StoreContext.Consumer>
        )
}


export default DialogsContainer;