import React from 'react';
import s from './ProfileInfo.module.css'

let ProfileInfo = () =>{
    return(
        <div>
          <div className={s.img_wrap}>
            <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt='bg' />
          </div>  
          <div>Avatar + desc</div>
        </div>
    );
}


export default ProfileInfo;