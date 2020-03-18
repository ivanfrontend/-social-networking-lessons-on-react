import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {NavLink} from "react-router-dom";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// let addText = React.createRef();

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
        
    }

    // let addMessage = () =>{
    //     let textMess = addText.current.value;
    //     alert(textMess);
    // }
    return (<Dialogs 
        updateNewMessageBody={onNewMessageChange} 
        sendMessage={onSendMessageClick}
        dialogsPage={state} />)
}


export default DialogsContainer;