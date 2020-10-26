import React from 'react'
import styles from './users.module.css'

let Paginator=(props)=>{

    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for(let i=1;i<=pagesCount;i++)
    { pages.push(i); }

    return<div>
        {
            pages.map(el=>{
            return <span className={props.currentPage===el ? styles.selectedPage:styles.pagination} 
            onClick={()=>{props.onPageChanged(el)}}>{el}</span>})
        } </div>
}


export default Paginator;