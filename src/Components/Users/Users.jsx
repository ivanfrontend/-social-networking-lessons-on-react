import React from 'react';
import s from './users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';


 let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return <div className={s.w_page_users}>

    <Pagination 
    totalItemsCount ={totalUsersCount} 
    pageSize={pageSize}
    currentPage={currentPage}
    onPageChanged={onPageChanged}
    />
    
{
    props.users.map( user => <User  
    key={user.id}
    user={user} 
    followingInProgress={props.followingInProgress} 
    unfollow={props.unfollow} 
    follow={props.follow}
    /> )
}
</div>
 }

 export default Users;