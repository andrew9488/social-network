import React from "react";
import style from './Profile.module.css';
import {ProfileImages} from "./ProfileImages/ProfileImages";
import {ProfileData} from "./ProfileData/ProfileData";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {


    return (
        <div className={style.profile}>
            <ProfileImages/>
            <div className={style.container}>
                <ProfileData
                    isFetching={props.isFetching}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatusTC}
                    uploadPhoto={props.uploadPhotoTC}
                    changeProfileInfo={props.changeProfileInfoTC}
                    isOwner={props.isOwner ? props.isOwner : false}
                />
                <MyPostsContainer/>
            </div>
        </div>
    );
})

