import React from 'react'
import styles from './users.module.css'
import Paginator from './Paginator';
import User from './User';


let Users=(props)=>{
    return<div className={styles.container}>
    <div>
        <Paginator 
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}/>
    </div>
        <div>
            {
            props.users.map(u=><User user={u}
            follow={props.follow}
            unfollow={props.unfollow}
            key={u.id}/>)
            }
        </div>
</div>
}


export default Users;