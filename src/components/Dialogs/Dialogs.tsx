import React from "react";
import style from './Dialogs.module.css'
import {MessageContainer} from "./DialogsItem/MessageContainer";
import {DialogContainer} from "./DialogsItem/DialogContainer";

export function Dialogs() {

    return (
        <div className={style.dialogs}>
            <div>
                <DialogContainer/>
            </div>
            <div>
               <MessageContainer/>
            </div>
        </div>
    );
}