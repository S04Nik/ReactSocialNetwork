import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader'
import ProfileStatusWithHook from './ProfileStatusWithHook';

const ProfileInfo=(props)=>{
    if(!props.profile)
    {
        return <Preloader/>
    }
return(
<div >
    <div className={s.container}>
    <img src={props.profile.photos.small} className={s.imgSmall} alt=''></img>
      <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
    </div>
</div>
)
}

export default ProfileInfo;