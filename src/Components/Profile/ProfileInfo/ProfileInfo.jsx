import React from 'react';
import s from './ProfileInfo.module.css'
import avatar_base from '../../../assets/img/avatar_base.png';
import ProfileStatusWithHook from './ProfileStatusWithHook';

let ProfileInfo = (props) =>{

  const onMainPhotoSilected = (e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

    return(
      
        <div>
          <div>
            {/* <div><img src={props.profile.photos.large ? props.profile.photos.large : avatar_base } alt="ava"/></div> */}
            <div>
              
              <img src={props.profile.photos ? props.profile.photos.large : avatar_base } alt="ava"/>
              {props.isOwner && <input type={"file"} onChange={onMainPhotoSilected} /> }
              </div>
            <div>
              <ul>
                <li><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></li>
                { props.profile.aboutMe&& <li>{ props.profile.aboutMe }</li> }
                { props.profile.contacts.facebook&& <li>{ props.profile.contacts.facebook }</li>}
                { props.profile.contacts.github&& <li>{ props.profile.contacts.github}</li> }
                <li> <span> В поиске работы: </span> <span> {props.profile.lookingForAJob ? 'Да' : 'Нет' } </span> </li>
              </ul>
            </div>
          </div>
        </div>
    );
}


export default ProfileInfo;