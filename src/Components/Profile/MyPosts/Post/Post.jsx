import React from 'react';
import s from './Post.module.css'
 
let Posts = (props) =>{
    return(
          <div>
            <div>{props.massage}</div>
            <span>{props.like}</span>
          </div>
    );
}


export default Posts;