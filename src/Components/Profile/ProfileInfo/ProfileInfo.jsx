import React, { useState, useEffect } from 'react'
import s from './ProfileInfo.module.css'
import avatar_base from '../../../assets/img/avatar_base.png';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataForm from './ProfileDataForm';

let ProfileInfo = (props) =>{

  let [elitMod, setEditMod ] = useState(false)

  const onMainPhotoSilected = (e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit =  (dataForm) => {
    props.savePrifile(dataForm).then(
      () => {
        setEditMod(false)
      }
    )
  }

    return(
      
        <div>
          <div>
            <div>
              
              <img src={props.profile.photos ? props.profile.photos.large : avatar_base } alt="ava"/>
              {props.isOwner && <input type={"file"} onChange={onMainPhotoSilected} /> }
              </div>
            <div>
              <ul>
                <li><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></li>
                {elitMod 
                ? <ProfileDataForm profile={props.profile} initialValues={props.profile}  onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => {setEditMod(true)}} profile={props.profile}  isOwner={props.isOwner} />
                
                }
                
              </ul>
            </div>
          </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return(
    <>
      {isOwner &&
        <li><button onClick={goToEditMode} >elitMod</button></li>
      }
      <li> <span> Меня зовут: </span> <span> {profile.fullName} </span> </li>
      <li> <span> В поиске работы: </span> <span> {profile.lookingForAJob ? 'Да' : 'Нет' } </span> </li>
      {profile.lookingForAJob &&
        <li> <span> Мои профессиональные навыки: </span> <span> {profile.lookingForAJobDescription } </span> </li>
      }
      <li> <span> Обо мне: </span> <span> {profile.aboutMe ? profile.aboutMe : 'Информации пока нет' } </span> </li>
      <li> <span>Контакты: </span>
        <ul>
          {
          Object.keys(profile.contacts).map( key => {
            return <Contact key={key} contactTitle={key}  contactValue={profile.contacts[key]} />
          })
          }
        </ul>
      </li>
    </>
  )
}



const Contact = ({contactTitle, contactValue}) => {
  return(
  <li> <b>{contactTitle}: </b> {contactValue} </li>
  )
}


export default ProfileInfo;