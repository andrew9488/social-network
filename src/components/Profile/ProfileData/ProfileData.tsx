import React from "react";
import style from './ProfileData.module.css';
import {ProfileType} from "../../../redux/profilePageReducer";
import userAvatar from "../../../assets/images/avatars/usersAvatar.jpg"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileDataPropsType = {
    profile: ProfileType
    isFetching: boolean
}

export function ProfileData(props: ProfileDataPropsType) {
    return (
        <div className={style.profileData}>
            {props.isFetching
                ? <Preloader/>
                : <>
                    <div className={style.avatar}>
                        <img className={style.avatarImg}
                             src={props.profile.photos.large ? props.profile.photos.large : userAvatar}
                             alt="my_avatar"/>
                    </div>
                    <div className={style.data}>
                        <h3 className={style.name}>{props.profile.fullName}</h3>
                        <ProfileStatus aboutMe = {props.profile.aboutMe}/>
                        <span className={style.aboutMe}>{props.profile.aboutMe}</span>
                        <div className={style.work}>
                    <span>
                        <span className={!props.profile.lookingForAJob ? style.open : style.busy}>
                            {!props.profile.lookingForAJob ? " Open to work" : " Busy"}</span>
                        </span>
                            {props.profile.lookingForAJob && <span>{props.profile.lookingForAJobDescription}</span>}
                        </div>
                        <ul>Contacts:
                            {props.profile.contacts.facebook && <li>{props.profile.contacts.facebook}</li>}
                            {props.profile.contacts.website && <li>{props.profile.contacts.website}</li>}
                            {props.profile.contacts.vk && <li>{props.profile.contacts.vk}</li>}
                            {props.profile.contacts.twitter && <li>{props.profile.contacts.twitter}</li>}
                            {props.profile.contacts.instagram && <li>{props.profile.contacts.instagram}</li>}
                            {props.profile.contacts.youtube && <li>{props.profile.contacts.youtube}</li>}
                            {props.profile.contacts.github && <li>{props.profile.contacts.github}</li>}
                            {props.profile.contacts.mainLink && <li>{props.profile.contacts.mainLink}</li>}
                        </ul>
                    </div>
                </>}
        </div>
    );
}

