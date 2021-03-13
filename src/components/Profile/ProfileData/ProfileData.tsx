import React from "react";
import style from './ProfileData.module.css';
import myAvatar from '../../../assets/images/avatars/myAvatar.jpg'

type ProfileDataPropsType = {
    name: string
    city: string
    age: number
    status: string
}

export function ProfileData(props: ProfileDataPropsType) {
    return (
        <div className={style.profileData}>
            <div className={style.avatar}>
                <img className={style.avatarImg}
                     src={myAvatar}
                     alt="my_avatar"/>
            </div>
            <div className={style.data}>
                <h3>{props.name}</h3>
                <span>Status: {props.status}</span>
                <ul>Info:
                    <li>Online</li>
                    <li>{props.city}</li>
                    <li>{props.age}</li>
                    <li>Single</li>
                </ul>
            </div>
        </div>
    );
}

