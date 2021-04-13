import React from "react";
import style from "./Dialogs.module.css";
import DialogContainer from "./DialogsItem/DialogContainer";
import MessageContainer from "./DialogsItem/MessageContainer";

export const Dialogs: React.FC = () => {

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