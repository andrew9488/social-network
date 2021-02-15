import style from "./Message.module.css";
import React, {ChangeEvent} from "react";
import {ActionType, MessageType} from "../../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/DialogsPageReducer";

type MessagePropsType = {
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export function Message(props: MessagePropsType) {

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
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