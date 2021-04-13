import style from "./Message.module.css";
import React from "react";
import {MessagePropsType} from "./MessageContainer";
import {CommonForm, CommonFormType} from "../../common/Form/CommonForm";

export const Message: React.FC<MessagePropsType> = (props) => {

    const sendMessageText = (text: CommonFormType) => {
        props.sendMessage(text.newText)
    }

    return (
        <div className={style.message}>
            <div className={style.messageText}>
                {props.messages.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
            <CommonForm onSubmit={sendMessageText}/>
        </div>
    );
}