import React from "react";
import style from "./ProfileForm.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Input, Textarea} from "../../common/Form/CustomField";
import {required} from "../../../utils/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ContactsType, ProfileType} from "../../../redux/profilePageReducer";

type FormType = {
    profile: ProfileType
    deactivateEditMode: () => void
}

export type ProfileFormPropsType = {
    fullName: string | null
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
}

const Form: React.FC<InjectedFormProps<ProfileFormPropsType, FormType> & FormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.formContainer}>
            <div className={style.formButton}>
                <button type="submit"><FontAwesomeIcon icon={faCheck}/></button>
                <button onClick={props.deactivateEditMode} className={style.cancel}>x</button>
            </div>
            <div>
                <span>Full Name: </span><Field name="fullName" type="text" placeholder="Full Name" component={Input}
                                               validate={[required]}/>
            </div>
            <div>
                <span>About Me: </span><Field name="aboutMe" type="text" component={Textarea} validate={[required]}/>
            </div>
            <div className={style.checkboxField}>
                <span>Looking for a job: </span>
                <Field name="lookingForAJob" type="checkbox" component={Input}/>
            </div>
            <div>
                <span>A Job Description: </span>
                <Field name="lookingForAJobDescription" type="text" component={Textarea} validate={[]}/>
            </div>
            <div>
                <span>Contacts:</span>
                {(Object.keys(props.profile.contacts) as Array<keyof ContactsType>).map((key) => {
                    return <div key={key} className={style.contactFields}>
                        <span>{key}: </span><Field name={"contacts." + key} type="text" component={Input}
                                                   validate={[]}/>
                    </div>
                })}
            </div>
        </form>
    )
}


export const ProfileForm = (reduxForm<ProfileFormPropsType, FormType>(
    {
        form: "profileInfo",
    }
)(Form))