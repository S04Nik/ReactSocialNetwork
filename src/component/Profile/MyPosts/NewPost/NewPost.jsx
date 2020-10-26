import React from 'react'
import s from './NewPost.module.css';
import NewPostForm from '../NewPostForm/NewPostForm';
// НЕ РАБОТАЕМ С DOCUMENT (GETELEMENTS)

const NewPost=(props)=>{

    let onAddPost=(values)=>{
        props.addPost(values.PostBody);
    }

   return (
   <div className={s.item}>
      <h3>New post :</h3> 
        <NewPostForm onSubmit={onAddPost}/>
    </div>
    )
}

export default NewPost;