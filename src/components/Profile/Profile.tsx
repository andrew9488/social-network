import React from "react";
import style from './Profile.module.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileData} from "./ProfileData/ProfileData";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


export function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profile}>
            <ProfileAvatar/>
            <div className={style.container}>
                <ProfileData
                    profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

