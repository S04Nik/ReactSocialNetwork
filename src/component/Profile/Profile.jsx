import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import MyNewPostsContainer from './MyPosts/NewPost/MyNewPostsContainer'
import { Redirect } from 'react-router-dom';

const Profile=(props)=>{
    if(!props.isAuth)return<Redirect to='/Login'/>
    return(
        <div className={s.content}>
        <ProfileInfo status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
        <MyNewPostsContainer store={props.store} />
        <MyPostsContainer store={props.store}/>
    </div>);

}

export default Profile;