import React from 'react'
import s from './FormsControllStyles.module.css'

// meta: { touched, error, warning }
export const FormControl=({input,meta:{ touched, error, warning },child,...props})=>{
    let hasError=touched&&error;
    return(
    <div className={s.formControll+" "+(hasError ? s.error : "")}>
        <div>
           {props.children}
        </div>
          {hasError&&<span>{error}</span>}
    </div>)
    
}

export const Input=(props)=>{
const{input,meta,child,...restProps}=props;
return <FormControl {...props}><input {...input}{...restProps}/></FormControl> 
}

export const Textarea=(props)=>{
    const{input,meta,child,...restProps}=props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl> 
    }
    