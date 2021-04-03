import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "./DialogContainer";

export function Dialog(props: DialogPropsType) {

    return (
        <div className={style.dialog}>
            {props.dialogs.map(d => <div className={style.dialogItem} key={d.id}>
                <NavLink to={"/dialogs/" + d.id} activeClassName={style.activeLink}>
                    <img src={d.img} alt="avatar"/>{d.name}
                </NavLink>
            </div>)}
        </div>
    );
}
