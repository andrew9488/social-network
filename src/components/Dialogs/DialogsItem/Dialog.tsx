import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../redux/DialogsPageReducer";

type DialogPropsType = {
    dialogs: Array<DialogType>
}

export function Dialog(props: DialogPropsType) {

    return (
        <div className={style.dialog}>
            {props.dialogs.map(d => <div key={d.id}><NavLink to={"/dialogs/" + d.id}><img src={d.img} alt="avatar"/>{d.name}</NavLink></div>)}
        </div>
    );
}
