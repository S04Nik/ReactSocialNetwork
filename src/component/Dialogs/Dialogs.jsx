import React from 'react';
import s from './Dialogs.module.css';

const Dialogs=(props)=>{
    
    let messageText=React.createRef();
  
    let ontextTyping=()=>{
    props.textTyping(messageText.current.value);
    }
    let onsendMessage=()=>{
        props.sendMessage(messageText.current.value);
    }
    return(
    <div className={s.dialogs}>
    <div className={s.dialogsItems}>
    {props.dialogElements}
    </div>
    <div className={s.messages}>
    {props.messageElements}
    </div>
    <textarea ref={messageText} onChange={ontextTyping}
     value={props.newMessage}></textarea>
    <button onClick={onsendMessage}>Send</button>
    </div>)
}

export default Dialogs;