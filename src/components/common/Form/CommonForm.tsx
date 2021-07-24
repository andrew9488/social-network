import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validator";
import {Textarea} from "./CustomField";

export type CommonFormPropsType = {
    newText: string
}

const max = maxLength(100)

const Form: React.FC<InjectedFormProps<CommonFormPropsType>> = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newText" type="text" component={Textarea} validate={[required, max]}/>
            </div>
            <div>
                <button type="submit">Send</button>
            </div>

        </form>
    );
})
export const CommonForm = reduxForm<CommonFormPropsType>({
    form: "formForSendNewText"
})(Form)