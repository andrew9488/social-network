import React from "react";
import style from './ProfileData.module.css';

type ProfileDataPropsType = {
    name: string
    city: string
    age: number
}

export function ProfileData(props: ProfileDataPropsType) {
    return (
        <div className={style.profileData}>
            <div>
                <img className={style.avatarImg}
                     src="https://static.wikia.nocookie.net/2d179f22-be3c-4985-b921-f2093efbd523"
                     alt="avatar"/>
            </div>
            <div className={style.data}>
                <p>Name: {props.name}</p>
                <p>City: {props.city}</p>
                <p>Age: {props.age}</p>
            </div>
        </div>
    );
}

