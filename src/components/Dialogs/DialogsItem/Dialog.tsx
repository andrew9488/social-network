import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "./DialogContainer";
import {PATH} from "../../Routes/Routes";
import photo from "./../../../assets/images/avatars/city-Z.png";

export const Dialog: React.FC<DialogPropsType> = React.memo((props) => {

    return (
        <div className={style.dialog}>
            {props.dialogs.map(d => <div className={style.dialogItemContainer} key={d.id}>
                <NavLink to={`${PATH.DIALOGS}/${d.id}`} activeClassName={style.activeLink}>
                    <div className={style.dialogItem}>
                        <img src={d.img} alt="avatar"/>
                        <span>{d.name}</span>
                    </div>
                </NavLink>
            </div>)}
            <div className={style.dialogItemContainer}>
                <NavLink to={`${PATH.DIALOGS}${PATH.CHAT}`} activeClassName={style.activeLink}>
                    <div className={style.dialogItem}>
                        <img src={photo} alt="city-Z"/>
                        <span>Polesye National Republic</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
})
