import React from "react";
import style from "./Dialogs.module.css";
import DialogContainer from "./DialogsItem/DialogContainer";
import MessageContainer from "./DialogsItem/MessageContainer";
import {PATH} from "../Routes/Routes";
import {useHistory} from "react-router-dom";
import {Chat} from "./Chat/Chat";

const Dialogs: React.FC = React.memo(() => {

    const history = useHistory()
    return (
        <div className={style.dialogs}>
            <div>
                <DialogContainer/>
            </div>
            {history.location.pathname === `${PATH.DIALOGS}${PATH.CHAT}`
                ? <Chat/>
                : <MessageContainer/>}
        </div>
    );
})

export default Dialogs;