import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/u_icon.png';
import { NavLink } from 'react-router-dom';


let Users=(props)=>{

    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for(let i=1;i<=pagesCount;i++)
    { pages.push(i); }

    return<div className={styles.container}>
        {
            pages.map(el=>{
            return <span className={props.currentPage===el ? styles.selectedPage:styles.pagination} 
            onClick={()=>{props.onPageChanged(el)}}>{el}</span>})
        } 
        {
         props.users.map(u=><div key={u.id} >
            <span>
                <div>
                <NavLink to={'profile/'+u.id} >
                    <img src={u.photos.small !=null ? u.photos.small:userPhoto} className={styles.userPhoto} alt=''/>
                </NavLink>
                </div>
                <div>
                {u.followed ? <button onClick={()=>{
                props.unfollow(u.id)
                }}>UNFOLLOW</button>
                :<button onClick={()=>{
                props.follow(u.id)
                }}>FOLLOW</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
    
            </span>
         </div>)
       }
    </div>
}


export default Users;