import React from "react";
import style from "./ProfileInfo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    fullName: string | null
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    onActivateEditMode: () => void
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    return (
        <>
            <h3 className={style.name}>{props.fullName} {props.isOwner ?
                <button onClick={props.onActivateEditMode}><FontAwesomeIcon icon={faPen}/></button> : ""} </h3>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <span className={style.aboutMe}><span
                className={style.descriptionInfo}>About Me:</span> {props.aboutMe}</span>
            <div className={style.work}>
                        <span className={props.lookingForAJob ? style.open : style.busy}>
                            <span
                                className={style.descriptionInfo}>Looking a job:</span> {props.lookingForAJob ? " Open to work" : " Busy"}
                        </span>
                {props.lookingForAJob && props.lookingForAJobDescription &&
                <span><span className={style.descriptionInfo}>Vacancy:</span> {props.lookingForAJobDescription}</span>}
            </div>
        </>
    )
}