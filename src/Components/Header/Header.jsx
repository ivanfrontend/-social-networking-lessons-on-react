import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

let Header = (props) =>{
    return(
        <header className={s.header}>
          <div>
            <NavLink to={'/'}> <img src="http://s1.iconbird.com/ico/0612/VistaStyleSportIconSet/w256h2561339399100SoccerBall.png" alt='ball'></img> </NavLink>
          </div>
          <div>
            <div>{props.isAuth ? props.login : <NavLink to={'/login'}>Логин</NavLink> }</div>
            
          </div>
        </header>
    );
}


export default Header;