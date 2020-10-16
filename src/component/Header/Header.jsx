import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header=(props)=>{
    return(
      <header className={s.header} >
      <img alt='' src='https://cdn.dribbble.com/users/182238/screenshots/2383317/lion2.jpg'></img>
      <div className={s.loginBlock}>
      {props.isAuth? <a>{props.login}</a>:<NavLink to={'/Login'}>Login</NavLink>}
      </div>
      </header>
    )
}

export default Header;