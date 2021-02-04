import React from "react";
import style from './Header.module.css';

export function Header() {
    return(
        <header className={style.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
                 alt="logo"/>
        </header>

    );
}

