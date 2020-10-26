import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/u_icon.png';
import { NavLink } from 'react-router-dom';


const User=({user,follow,unfollow})=>{
    return(
         <div>
            <span>
                <div>
                <NavLink to={'Profile/'+user.id} >
                    <img src={user.photos.small !=null ? user.photos.small:userPhoto} className={styles.userPhoto} alt=''/>
                </NavLink>
                </div>
                <div>
                {user.followed ? <button onClick={()=>{
                unfollow(user.id)
                }}>UNFOLLOW</button>
                :<button onClick={()=>{
                follow(user.id)
                }}>FOLLOW</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
    
            </span>
         </div>
    )
}


export default User;