import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "./DialogContainer";

export const Dialog: React.FC<DialogPropsType> = (props) => {

    return (
        <div className={style.dialog}>
            {props.dialogs.map(d => <div className={style.dialogItemContainer} key={d.id}>
                <NavLink to={"/dialogs/" + d.id} activeClassName={style.activeLink}>
                    <div className={style.dialogItem}>
                        <img src={d.img} alt="avatar"/>
                        <span>{d.name}</span>
                    </div>
                </NavLink>
            </div>)}
        </div>
    );
}
