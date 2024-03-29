import React, {ChangeEvent, useCallback, useState} from "react";
import style from "./ProfileData.module.css";
import {ContactsType, ProfileType} from "../../../redux/profilePageReducer";
import userAvatar from "../../../assets/images/avatars/usersAvatar.jpg"
import Preloader from "../../common/Preloader/Preloader";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Contacts} from "./Contacts";
import {ProfileInfo} from "./ProfileInfo";
import {ProfileForm, ProfileFormPropsType} from "./ProfileForm";


type ProfileDataPropsType = {
    profile: ProfileType
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
    uploadPhoto: (photos: Blob) => void
    isOwner: boolean
    changeProfileInfo: (profile: ProfileFormPropsType) => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = React.memo((props) => {


        const [editMode, setEditMode] = useState<boolean>(false)

        const onUploadPhoto = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                props.uploadPhoto(e.target.files[0])
            }
        }, [props.uploadPhoto])

        const onActivateEditMode = useCallback(() => {
            setEditMode(true)
        }, [])
        const deactivateEditMode = useCallback(() => {
            setEditMode(false)
        }, [])

        const onSubmit = useCallback((formData: ProfileFormPropsType) => {
            props.changeProfileInfo(formData)
            setEditMode(false)
        }, [props])

        return (
            <div className={style.profileData}>
                {props.isFetching
                    ? <Preloader/>
                    : <>
                        <div className={style.avatar}>
                            <img className={style.avatarImg}
                                 src={props.profile.photos.large ? props.profile.photos.large : userAvatar}
                                 alt="my_avatar"/>
                            {props.isOwner
                                ? <label>
                                    <FontAwesomeIcon icon={faFileImage} className={style.buttonLoad}/>
                                    <input type="file" onChange={onUploadPhoto}/>
                                </label>
                                : ""
                            }
                        </div>
                        <div className={style.data}>
                            {editMode
                                ? <ProfileForm onSubmit={onSubmit} initialValues={props.profile}
                                               profile={props.profile}
                                               deactivateEditMode={deactivateEditMode}/>
                                : < ProfileInfo fullName={props.profile.fullName}
                                                aboutMe={props.profile.aboutMe}
                                                lookingForAJob={props.profile.lookingForAJob}
                                                lookingForAJobDescription={props.profile.lookingForAJobDescription}
                                                isOwner={props.isOwner}
                                                status={props.status}
                                                updateStatus={props.updateStatus}
                                                onActivateEditMode={onActivateEditMode}
                                />
                            }
                            {
                                editMode ? null
                                    : <div>
                                        <b>Contacts: </b>{(Object.keys(props.profile.contacts) as Array<keyof ContactsType>).map((key, index) => {
                                        return <Contacts key={index} contactsKey={key}
                                                         contactsValue={props.profile.contacts[key]}/>
                                    })}
                                    </div>
                            }

                        </div>
                    </>}
            </div>
        );
    }
)

