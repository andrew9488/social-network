import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/logo/logo.png'
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}><img src={logo} alt="logo"/></div>
            <div className={style.headUser}>
                <div>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div>
                    <NavLink to="#">Notification</NavLink>
                </div>
                <div>
                    <NavLink to="#">Login</NavLink>
                </div>
            </div>
        </header>

    );
}

