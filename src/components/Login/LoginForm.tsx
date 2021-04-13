import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/Form/CustomField";
import {required} from "../../utils/validator";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Form: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" type="text" placeholder="login" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name="password" type="password" placeholder="password" component={Input} validate={[required]}/>
            </div>
            <div style={{display: "flex"}}>
                <Field name="rememberMe" type="checkbox" component={Input}/><span>remember me</span>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
}
export const LoginForm = reduxForm<FormDataType>({
    form: "login"
})(Form)