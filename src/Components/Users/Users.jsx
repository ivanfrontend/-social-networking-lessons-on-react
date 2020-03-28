import React from 'react';
import s from './users.module.css';
let Users = (props) => {

    if(props.users.length  === 0){
        props.setUsers([{id: 1, photoUrl: 'https:/img/img.png', followed: false, fullName: 'Ivan V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus1'} },
        {id: 2, photoUrl: 'https:/img/img.png', followed: false, fullName: 'Dmitri V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus2'} },
        {id: 3, photoUrl: 'https:/img/img.png', followed: true, fullName: 'Marina V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus3'} },
        {id: 4, photoUrl: 'https:/img/img.png', followed: true, fullName: 'Sveta V', status: 'test statut', location: {city: 'Minsk', country: 'Belarus4'} }])
    }

   
    return <div>
        {
            props.users.map( u => <div className={s.wrap_flex} key={u.id}>
                <div className={s.photo_and_button}>
                   <div><img src={u.photoUrl} alt="ava"/></div> 
                    <div>
                        {u.followed ? <button onClick={ () => props.unfollow(u.id) } >unfollow</button> : <button onClick={ () => props.follow(u.id) } >follow</button>}
                    </div>
                </div>
                <div className={s.user_info}>
                    <div className={s.wi_50}>{u.fullName}</div>
                    <div className={s.wi_50}>
                         <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                    <div className={s.wi_100}>{u.status}</div>
                </div>
                 </div> )
        }
    </div>
}

export default Users;