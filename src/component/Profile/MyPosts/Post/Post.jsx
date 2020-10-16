import React from 'react';
import s from './Post.module.css';

const Post=(props)=>{
    return(
    <div className={s.item}>
        <img src='https://p7.hiclipart.com/preview/502/443/707/earth-europe-planet-cloud-earth.jpg'></img>
        {props.text}
    </div>
    )
}
export default Post;