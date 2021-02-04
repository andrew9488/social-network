import React from "react";
import style from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    stateProfile: ProfilePageType
    addPost: (postText: string) => void
    updateNewPostText: (newPostText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profile}>
            <ProfileAvatar/>
            <ProfileData name="Andrew" city="Minsk" age={25}/>
            <MyPosts myPosts={props.stateProfile.posts}
                     addPost={props.addPost}
                     newPostText={props.stateProfile.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

