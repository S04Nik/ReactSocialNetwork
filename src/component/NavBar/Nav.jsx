import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const Nav=(props)=>{
    return(
        <nav className={s.nav}>
      <div className={`${s.item} ${s.active}` }>

      {props.userId ?  <NavLink to={`/Profile/${props.userId}`} activeClassName={s.active}>Profile</NavLink>
      :<NavLink to={`/Profile`} activeClassName={s.active}>Profile</NavLink>} 
      </div>
      <div className={s.item}>
      <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to='/Dialogs' activeClassName={s.active}>Dialogs</NavLink>
      </div>      
      <div className={s.item}>
      <NavLink to='/News' activeClassName={s.active}>News</NavLink>
      </div>      
      <div className={s.item}>
      <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to='/Settings' activeClassName={s.active}> Settings</NavLink>
      </div>
    </nav>
    );
}

// export default Nav;

export default connect((state)=>({userId:state.auth.userId}))(Nav);