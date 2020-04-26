import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'


// let addText = React.createRef();


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.textareaMessage}>
             <div><Field placeholder="message" name={'newMessageBody'}  component={'textarea'}/></div>
            <div><button >Add message</button></div>
        </form>
    )
}

const AddMessageFormRedax = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs = state.dialogs.map( dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let massages = state.massage.map( massage =>  <Message message={massage.massage} key={massage.id} /> );
  

    let onSubmit = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogs}
            </div>
            <div className={s.massages}>
                <div>{massages}</div>


                <AddMessageFormRedax onSubmit={onSubmit} />
            </div>

        </div>
    )
}




export default Dialogs;