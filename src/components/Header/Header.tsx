import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/logo/logo.png";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

export const Header: React.FC<HeaderPropsType> = (props) => {

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
                    {props.isAuth
                        ?
                        <div className={style.logOut}>
                            <NavLink to="#">{props.data.login}</NavLink>
                            <button onClick={props.logOutTC}>logout</button>
                        </div>
                        : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

