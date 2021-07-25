import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validator";
import {Textarea} from "./CustomField";

export type CommonFormPropsType = {
    newText: string
}

type FormType = {
    disable?: boolean
}

const max = maxLength(100)

const Form: React.FC<InjectedFormProps<CommonFormPropsType, FormType> & FormType> = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newText" type="text" component={Textarea} validate={[required, max]}/>
            </div>
            <div>
                <button disabled={props.disable} type="submit">Send</button>
            </div>

        </form>
    );
})
export const CommonForm = reduxForm<CommonFormPropsType, FormType>({
    form: "formForSendNewText"
})(Form)