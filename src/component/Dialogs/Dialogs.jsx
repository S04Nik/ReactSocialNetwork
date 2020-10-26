import React from 'react';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import s from './Dialogs.module.css';

const Dialogs=(props)=>{
    let addNewMessage=(values)=>{props.sendMessage(values.newMessageBody);}
    
    return(
    <div className={s.dialogs}>
    <div className={s.dialogsItems}>
    {props.dialogElements}
    </div>
    <div className={s.messages}>
    {props.messageElements}
    </div>
    <AddMessageForm onSubmit={addNewMessage}/>
    </div>)
}

export default Dialogs;