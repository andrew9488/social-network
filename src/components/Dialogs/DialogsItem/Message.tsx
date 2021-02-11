import style from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {MessageType, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

type MessagePropsType = {
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: any) => void
}

export function Message(props: MessagePropsType) {

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(newText))
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