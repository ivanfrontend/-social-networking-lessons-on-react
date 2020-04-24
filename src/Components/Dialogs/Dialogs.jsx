import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {NavLink, Redirect} from "react-router-dom";
// import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


// let addText = React.createRef();

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs = state.dialogs.map( dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let massages = state.massage.map( massage =>  <Message message={massage.massage} key={massage.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body));
        
    }


    // if(!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogs}
            </div>
            <div className={s.massages}>
                <div>{massages}</div>
                <div className={s.textareaMessage}>
                    <div><textarea 
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Add message</button></div>
                </div>
            </div>

        </div>
    )
}


export default Dialogs;