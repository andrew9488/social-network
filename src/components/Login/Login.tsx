import React from "react"
import {FormDataType, LoginForm} from "./LoginForm";
import style from "./Login.module.css"

export const Login: React.FC = (props) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={style.loginPage}>
            <h2>login</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}