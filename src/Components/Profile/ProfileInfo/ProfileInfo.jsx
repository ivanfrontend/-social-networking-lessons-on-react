import React from 'react';
import s from './ProfileInfo.module.css'
import avatar_base from '../../../assets/img/avatar_base.png';
import ProfileStatus from './ProfileStatus';

let ProfileInfo = (props) =>{

    return(
        <div>
          {/* <div className={s.img_wrap}>
            <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt='bg' />
          </div>   */}
          <div>
            <div><img src={props.profile.photos.small ? props.profile.photos.small : avatar_base } alt="ava"/></div>
            <div>
              <ul>
                <li><ProfileStatus status={props.status} updateStatus={props.updateStatus} /></li>
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