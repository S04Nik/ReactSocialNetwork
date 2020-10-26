import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../validators';
import { Input } from '../../validators/FormsController';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../../validators/FormsControllStyles.module.css'

const LoginForm=({handleSubmit,error})=>{
    return(<form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'login'}
             name={'login'} 
             validate={required}
             component={Input}/>
        </div>
        <div>
            <Field placeholder={'password'} 
            name={'password'} 
            type={'password'}
            validate={required}
            component={Input}/>
        </div>
        <div className={s.inLine}>
        <label htmlFor="rememberMe">remember me</label>
        <div>
            <Field type={'checkbox'} 
            name={'rememberMe'}
            id={'rememberMe'}
            component={Input}/> 
        </div>
        </div>
       
        {error&&
         <div className={s.errorBlock}>
            {error}
         </div>}
        <div>
            <button>Login</button>
        </div>
    </form>)

}
// reduxForm вернула HOC . обернули loginForm
const LoginReduxForm=reduxForm({form:'login'})(LoginForm);

const Login=(props)=>{

const onSubm=(formData)=>{
    props.login(formData.login,
    formData.password,formData.rememberMe);
}
if(props.isAuth){return <Redirect to={`/Profile/${props.userId}`}/>}
    return<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubm}/>
    </div>
}
const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.isAuth,
        userId:state.auth.userId
    }
}
export default connect (mapStateToProps,{login,})(Login);