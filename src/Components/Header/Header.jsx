import React from 'react';
import s from './Header.module.css';

let Header = () =>{
    return(
        <header className={s.header}>
          <img src="http://s1.iconbird.com/ico/0612/VistaStyleSportIconSet/w256h2561339399100SoccerBall.png" alt='ball'></img>
        </header>
    );
}


export default Header;