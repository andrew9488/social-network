import React from "react";
import style from "./Footer.module.css";


export const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerText}>
                <span>This is my firs project.</span><br/>
                <span>Social network was developed by Andrew Pashkevich</span>
            </div>
        </footer>
    );
}

