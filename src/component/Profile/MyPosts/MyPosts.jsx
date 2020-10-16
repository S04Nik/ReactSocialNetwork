import React from 'react';
import s from './MyPosts.module.css';

const MyPosts=(props)=>{

  return(
<div className={s.container_posts}>
 <h3>My posts</h3> 
  <div className={s.item}>
  {props.allPosts}
  </div>
</div> )
}
export default MyPosts;