import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/logo/logo.png'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

export function Header(props: HeaderPropsType) {
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
                    {props.isAuth ? <NavLink to="#">{props.data.login}</NavLink>
                        : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>

    );
}

