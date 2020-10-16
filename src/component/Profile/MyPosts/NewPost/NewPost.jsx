import React from 'react'
import s from './NewPost.module.css';
// НЕ РАБОТАЕМ С DOCUMENT (GETELEMENTS)

const NewPost=(props)=>{
    let newPostElement=React.createRef();
    let onAddPost=()=>{
        props.addPost(newPostElement.current.value);
    }
    let onChangeText=()=>{
    props.changeText(newPostElement.current.value);
    }

   return (
   <div className={s.item}>
      <h3>New post  :</h3> 
    <textarea ref={newPostElement} onChange={onChangeText} value={props.newPostText}></textarea>
    <button onClick={onAddPost} className='like'> ADD </button>
    </div>
    )

}
export default NewPost;