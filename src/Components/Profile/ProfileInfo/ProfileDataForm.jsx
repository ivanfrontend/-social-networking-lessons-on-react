import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'
import { required, maxLenght } from '../../../utils/validators/validators';
import { Textarea, Input } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    // debugger
    return(
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div> }
        <li><button >save</button></li>
        <li> <span> Меня зовут: </span> <span> 
        <Field 
        component={Input} 
        name={'fullName'} 
        validate={[]}
            />
             </span> </li>
        <li> <span> В поиске работы: </span> <span> 
        <Field 
        component={Input} 
        type={'checkbox'}
        name={'lookingForAJob'} 
        validate={[]}
            />
             </span> </li>
        <li> <span> Мои профессиональные навыки: </span> 
        <span> 
        <Field 
        component={Input} 
        name={'lookingForAJobDescription'} 
        validate={[]}
            />
            </span> </li>
        <li> <span> Обо мне: </span> <span> 
        <Field 
        component={Input} 
        name={'aboutMe'} 
        validate={[]}
            /></span> </li>
        <li> <span>Контакты: </span>
          <ul>
            {
            Object.keys(profile.contacts).map( key => {
              return <div key={key} className={s.contacts}>
                <b>{key}: </b>
                <Field 
                component={Input} 
                name={'contacts.' + key} 
                validate={[]}
                />
              </div>
              //  <Contact key={key} contactTitle={key}  contactValue={profile.contacts[key]} />
            })
            }
          </ul>
        </li>
      </form>
    )
  }


  export default reduxForm({form: 'edit-profile'})(ProfileDataForm)