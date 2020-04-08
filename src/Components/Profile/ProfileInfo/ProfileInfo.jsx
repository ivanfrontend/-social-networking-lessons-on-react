import React from 'react';
import s from './ProfileInfo.module.css'

let ProfileInfo = (props) =>{

  console.log(props.profile.contacts.github)

    // let contacts = props.profile.contacts.map( c => {
    //   console.log(c)
    //   })

    return(
        <div>
          <div className={s.img_wrap}>
            <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt='bg' />
          </div>  
          <div>
            <div><img src={props.profile.photos.small} alt="ava"/></div>
            <div>
              <ul>
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