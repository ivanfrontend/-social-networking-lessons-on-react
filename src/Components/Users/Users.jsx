import React from 'react';
import s from './users.module.css';
import avatar_base from '../../assets/img/avatar_base.png';


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