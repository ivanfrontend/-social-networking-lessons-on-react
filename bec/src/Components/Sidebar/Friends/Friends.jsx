import React from 'react';
import s from './Friends.module.css'

let Friends = (props) =>{
    //console.log(props);
  //  let friends = props.dataFriends.firend.map = () => friend
    return(
        <div>
            <p>{props.friendsInfo}</p>
        </div>
    )
}

export default Friends;