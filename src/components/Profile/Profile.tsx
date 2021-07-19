import React from "react";
import style from './Profile.module.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileData} from "./ProfileData/ProfileData";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";


export const Profile: React.FC<ProfilePropsType> = React.memo((props) => {

    // if (!props.isAuth) {
    //     return <Redirect to={PATH.LOGIN}/>
    // }

    return (
        <div className={style.profile}>
            <ProfileAvatar/>
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

