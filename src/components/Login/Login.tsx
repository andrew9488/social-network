import React from "react"
import {FormDataType, LoginForm} from "./LoginForm";
import style from "./Login.module.css"
import {LoginPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";

export const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.logInTC(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div className={style.loginPage}>
            <h2>login</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}