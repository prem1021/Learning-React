import React from 'react'
import style from './css/userProfile.module.css'
function UserProfile() {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <img className={style.img} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="Profile" />
                <div className={style.textWrap}>
                    <h4>Rahul Kumar</h4>
                    <p>Software Development</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
