import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageAction} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps=(state)=>{
    
    return {
        dialogElements:state.dialogsPage.dialogs.map(el=><DialogItem name={el.name} key={el.id} id={el.id}/>),
        messageElements:state.dialogsPage.messages.map(m=><Message message={m.message} key={m.id} id={m.id}/>),
        newMessage:state.dialogsPage.newMessage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{ sendMessage:(newMessageBody)=>{
            dispatch(sendMessageAction(newMessageBody));}
        }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);