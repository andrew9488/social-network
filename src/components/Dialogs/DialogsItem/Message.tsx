import style from "./Message.module.css";
import React, {useCallback} from "react";
import {MessagePropsType} from "./MessageContainer";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";
import {reset} from "redux-form";
import {useDispatch} from "react-redux";

export const Message: React.FC<MessagePropsType> = React.memo((props) => {

    const dispatch = useDispatch()

    const sendMessageText = useCallback((text: CommonFormPropsType) => {
        props.sendMessage(text.newText)
        dispatch(reset("formForSendNewText"))
    }, [props])

    return (
        <div className={style.message}>
            <div className={style.messageText}>
                {props.messages.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
            <CommonForm onSubmit={sendMessageText}/>
        </div>
    );
})