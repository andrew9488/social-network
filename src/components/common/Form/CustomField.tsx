import React from "react";
import style from "./CustomField.module.css"
import {WrappedFieldProps} from "redux-form";


// export const Textarea: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...restProps}) => {
//     return (
//         <>
//             <div className={`${style.fieldForm} ${touched && error ? style.error : ""}`}>
//                 <textarea{...input} {...restProps}/>
//             </div>
//             <div className={style.error}>
//                 {touched && error && <span>{error}</span>}
//             </div>
//         </>
//     )
// }
//
//
// export const Input: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...restProps}) => {
//     return (
//         <>
//             <div className={`${style.fieldForm} ${touched && error ? style.error : ""}`}>
//                 <input{...input} {...restProps}/>
//             </div>
//             <div className={style.error}>
//                 {touched && error && <span>{error}</span>}
//             </div>
//         </>
//     )
// }

const FormControl: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...restProps}) => {
    return (
        <>
            <div className={`${style.fieldForm} ${touched && error ? style.error : ""}`}>
                {restProps.children}
            </div>
            <div className={style.error}>
                {touched && error && <span>{error}</span>}
            </div>
        </>
    );
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}