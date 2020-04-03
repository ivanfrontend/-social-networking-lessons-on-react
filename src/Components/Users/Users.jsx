import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import avatar_base from '../../assets/img/avatar_base.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
            this.props.setTottalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for( let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return <div>

            <div className={s.pagination}>
                { pages.map( p => {
                  return <span className={ this.props.currentPage === p && s.selectedPage} onClick={ () => {this.onPageChanged(p)} }> {p} </span> 
                }) }
            </div>
        {
            this.props.users.map( u => <div className={s.wrap_flex} key={u.id}>
                <div className={s.photo_and_button}>
                   <div><img src={u.photos.small ? u.photos.small : avatar_base } alt="ava"/></div> 
                    <div className={s.w_foll}>
                        {u.followed ? <button onClick={ () => this.props.unfollow(u.id) } >unfollow</button> : <button onClick={ () => this.props.follow(u.id) } >follow</button>}
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
}


export default Users;