import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Form: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" type="text" placeholder="login" component="input"/>
            </div>
            <div>
                <Field name="password" type="password" placeholder="password" component="input"/>
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component="input"/><span>remember me</span>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    )
}
export const LoginForm = reduxForm<FormDataType>({
    form: "login"
})(Form)