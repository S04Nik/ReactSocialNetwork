import React from 'react'
import { maxLengthCreator, required } from '../../../validators/index';
import { Textarea } from '../../../validators/FormsController';
import { Field, reduxForm } from 'redux-form';

const LengthField=maxLengthCreator(50);

const AddMessageForm=(props)=>{
return(
    <form onSubmit={props.handleSubmit}>
    <div>
    <Field validate={[required,LengthField]} placeholder={'Enter your massage'}
         name={'newMessageBody'}
        component={Textarea}></Field>
    </div>
    <div>
        <button>Send</button>
    </div>
    </form>
)
}
export default reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)