import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/logo/logo.png";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {PATH} from "../Routes";

export const Header: React.FC<HeaderPropsType> = React.memo((props) => {

    return (
        <header className={style.header}>
            <div className={style.logo}><img src={logo} alt="logo"/></div>
            <div className={style.headUser}>
                <div>
                    <NavLink to={PATH.DIALOGS}><FontAwesomeIcon icon={faEnvelope}/></NavLink>
                </div>
                <div>
                    <NavLink to="#"><FontAwesomeIcon icon={faBell}/></NavLink>
                </div>
                <div>
                    {
                        props.isAuth
                            ?
                            <div className={style.logOut}>
                                <NavLink to={`${PATH.PROFILE}/:userId?`}>{props.data.login}</NavLink>
                                <button onClick={props.logOutTC}>logout</button>
                            </div>
                            : <NavLink to={PATH.LOGIN}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    );
})

