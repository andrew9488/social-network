import React from "react";
import style from './Dialogs.module.css'
import {Dialog} from "./DialogsItem/Dialog";
import {Message} from "./DialogsItem/Message";
import {ActionType, DialogPageType} from "../../redux/store";

type DialogsPropsType = {
    stateDialogs: DialogPageType
    dispatch: (action: ActionType) => void
}

export function Dialogs(props: DialogsPropsType) {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <Dialog dialogs={props.stateDialogs.dialogs}/>
            </div>
            <div className={style.messages}>
                <Message messages={props.stateDialogs.messages}
                         newMessageText={props.stateDialogs.newMessageText}
                         dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}