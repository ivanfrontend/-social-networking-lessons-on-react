import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.css'
import Friends from './Friends/Friends'




let Sidebar = (props) =>{
    // debugger
    // let friend = props.dataFriends.firend.map( friend => <Friends friendsInfo={friend.name} />)

    return(
        <div className={s.sidebar}>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
                </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/dialogs">dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/news">News</NavLink>
            </div>
            <div>Music</div>
            <div>Settings</div>
            {/* {friend} */}
        </div>
       )
}


export default Sidebar;