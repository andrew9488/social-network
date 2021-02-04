import style from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {MessageType} from "../../../redux/state";

type MessagePropsType = {
    messages: Array<MessageType>
    sendMessage: (messageText: string) => void
    newMessageText: string
    updateNewMessageText: (newMessageText: string) => void
}

export function Message(props: MessagePropsType) {

    const sendMessage = () => {
        props.sendMessage(props.newMessageText)
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={style.message}>
            <div className={style.messageText}>
                {props.messages.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
            <div>
                <textarea value={props.newMessageText}
                          onChange={onChangeMessageHandler}
                />
            </div>
            <div className={style.sendMessageButton}>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}