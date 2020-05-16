import React from 'react';
import s from './users.module.css';
import avatar_base from '../../assets/img/avatar_base.png';
import {NavLink} from 'react-router-dom';


 let User = ({user, followingInProgress, unfollow, follow}) => {

    return  <div className={s.wrap_flex}>
        <div className={s.photo_and_button}>
           <div>
           <NavLink to={"/profile/" + user.id}><img src={user.photos.small ? user.photos.small : avatar_base } alt="ava"/> </NavLink>
           </div> 
            <div className={s.w_foll}>
                {user.followed 
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { 
                    unfollow(user.id)} } >unfollow</button> 
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                    follow(user.id);} } >follow</button>}
            </div>
        </div>
        <div className={s.user_info}>
            <div className={s.wi_50}>{user.name}</div>
            <div className={s.wi_50}>
                 <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
            <div className={s.wi_100}>{user.status}</div>
        </div>
         </div> 
}


 export default User;