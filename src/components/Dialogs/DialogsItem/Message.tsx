import style from "./Message.module.css";
import React, {useCallback} from "react";
import {MessagePropsType} from "./MessageContainer";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";

export const Message: React.FC<MessagePropsType> = React.memo((props) => {

    const sendMessageText = useCallback((text: CommonFormPropsType) => {
        props.sendMessage(text.newText)
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