import React from "react";
import style from './Dialogs.module.css'
import {Dialog} from "./DialogsItem/Dialog";
import {Message} from "./DialogsItem/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    stateDialogs: DialogPageType
    sendMessage: (messageText: string) => void
    updateNewMessageText: (newMessageText: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <Dialog dialogs={props.stateDialogs.dialogs}/>
            </div>
            <div className={style.messages}>
                <Message messages={props.stateDialogs.messages}
                         sendMessage={props.sendMessage}
                         newMessageText={props.stateDialogs.newMessageText}
                         updateNewMessageText={props.updateNewMessageText}
                />
            </div>
        </div>
    );
}