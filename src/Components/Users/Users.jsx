import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import avatar_base from '../../assets/img/avatar_base.png'
let Users = (props) => {
        
    if(props.users.length  === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            // debugger
            props.setUsers(response.data.items)
        } )

        // props.setUsers([{id: 1, photoUrl: 'https:/img/img.png', followed: false, fullName: 'Ivan V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus1'} },
        // {id: 2, photoUrl: 'https:/img/img.png', followed: false, fullName: 'Dmitri V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus2'} },
        // {id: 3, photoUrl: 'https:/img/img.png', followed: true, fullName: 'Marina V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus3'} },
        // {id: 4, photoUrl: 'https:/img/img.png', followed: true, fullName: 'Sveta V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus4'} }])
    }

   
    return <div>
        {
            props.users.map( u => <div className={s.wrap_flex} key={u.id}>
                <div className={s.photo_and_button}>
                   <div><img src={u.photos.small ? u.photos.small : avatar_base } alt="ava"/></div> 
                    <div className={s.w_foll}>
                        {u.followed ? <button onClick={ () => props.unfollow(u.id) } >unfollow</button> : <button onClick={ () => props.follow(u.id) } >follow</button>}
                    </div>
                </div>
                <div className={s.user_info}>
                    <div className={s.wi_50}>{u.name}</div>
                    <div className={s.wi_50}>
                         <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                    <div className={s.wi_100}>{u.status}</div>
                </div>
                 </div> )
        }
    </div>
}

export default Users;