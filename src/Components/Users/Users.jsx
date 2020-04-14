import React from 'react';
import s from './users.module.css';
import avatar_base from '../../assets/img/avatar_base.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';


 let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    
        let pages = []
        for( let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

    return <div className={s.w_page_users}>

    <div className={s.pagination}>
        { pages.map( p => {
          return <span className={ props.currentPage === p && s.selectedPage} onClick={ () => {props.onPageChanged(p)} }> {p} </span> 
        }) }
    </div>
    
{
    props.users.map( u => <div className={s.wrap_flex} key={u.id}>
        <div className={s.photo_and_button}>
           <div>
           <NavLink to={"/profile/" + u.id}><img src={u.photos.small ? u.photos.small : avatar_base } alt="ava"/> </NavLink>
           </div> 
            <div className={s.w_foll}>
                {u.followed 
                ? <button onClick={ () => { 

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": '166557c9-3bdb-4c27-88cc-fd541108a444'
                        }
                    }).then( response => {
                        if(response.data.resultCode == 0){
                            props.unfollow(u.id) 
                        }
                        
                    }) 
                } } >unfollow</button> 
                : <button onClick={ () => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": '166557c9-3bdb-4c27-88cc-fd541108a444'
                        }
                    }).then( response => {
                        if(response.data.resultCode == 0){
                            props.follow(u.id) 
                        }
                        
                    })
                     
                     } } >follow</button>}
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