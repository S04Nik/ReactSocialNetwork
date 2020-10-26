import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../validators/index';
import { Textarea } from '../../../../validators/FormsController';

const LengthField=maxLengthCreator(50);
const NewPostForm=(props)=>{
    return(
        // handleSubmit обертка из reduxForm
        // собирает обьект и  preventDefault
        <form onSubmit={props.handleSubmit}> 
        <Field validate={[required,LengthField]} placeholder={'Create Post'}
        name={'PostBody'}
        component={Textarea}></Field>
        <button className='like'> ADD </button>
        </form>
    )
}
export default reduxForm({form:'NewPostAddForm'})(NewPostForm);