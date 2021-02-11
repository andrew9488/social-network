import React from "react";
import style from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    stateProfile: ProfilePageType
    dispatch: (action: any) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profile}>
            <ProfileAvatar/>
            <ProfileData name="Andrew" city="Minsk" age={25}/>
            <MyPosts myPosts={props.stateProfile.posts}
                     newPostText={props.stateProfile.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
        ;
}

