import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css";
import {PATH} from "../Routes";

export const Navbar: React.FC = React.memo(() => {
    return (
        <nav className={style.navbar}>
            <div className={style.items}>
                <div className={style.item}>
                    <NavLink to={`${PATH.PROFILE}/:userId?`} activeClassName={style.activeLink}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.NEWS} activeClassName={style.activeLink}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.DIALOGS} activeClassName={style.activeLink}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.USERS} activeClassName={style.activeLink}>Find users</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.MUSIC} activeClassName={style.activeLink}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.SETTINGS} activeClassName={style.activeLink}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
})

