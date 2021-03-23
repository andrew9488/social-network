import style from "./Message.module.css";
import React, {ChangeEvent} from "react";
import { MessagePropsType } from "./MessageContainer";

export function Message(props: MessagePropsType) {

    const sendMessageText = () => {
        props.sendMessage()
    }

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={style.message}>
            <div className={style.messageText}>
                {props.messages.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
            <div>
                <textarea value={props.newMessageText}
                          onChange={onChangeMessageText}
                />
            </div>
            <div className={style.sendMessageButton}>
                <button onClick={sendMessageText}>Send</button>
            </div>
        </div>
    );
}