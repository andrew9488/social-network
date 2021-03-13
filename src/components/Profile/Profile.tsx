import React from "react";
import style from './Profile.module.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileData} from "./ProfileData/ProfileData";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile() {
    return (
        <div className={style.profile}>
            <ProfileAvatar/>
            <div className={style.container}>
                <ProfileData
                    status="I am learning React."
                    name="Andrew Pashkevich"
                    city="Minsk"
                    age={25}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

