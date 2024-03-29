import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/Form/CustomField";
import {required} from "../../utils/validator";
import style from "../common/Form/CustomField.module.css";

type FormPropsType = {
    captcha: string | null
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

//style in CustomField.module.css

const Form: React.FC<InjectedFormProps<FormDataType, FormPropsType> & FormPropsType> = (props) => {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'} rel="noreferrer"> here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
            <form onSubmit={props.handleSubmit} className={style.loginForm}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", width:"250px"}}>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text" placeholder="login" component={Input} validate={[required]}
                           id="email"/>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", width:"250px"}}>
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" placeholder="password" component={Input}
                           validate={[required]} id="password"/>
                </div>
                <div className={style.error}>
                    {props.error}
                </div>
                <div style={{display: "flex"}}>
                    <Field name="rememberMe" type="checkbox" component={Input}/><span>remember me</span>
                </div>
                {props.captcha &&
                <div>
                    <img src={props.captcha} alt="captcha"/>
                    <Field name="captcha" type="text" component={Input} validate={[required]}/>
                </div>
                }
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    );
}
export const LoginForm = reduxForm<FormDataType, FormPropsType>(
    {
        form: "login"
    })(Form)