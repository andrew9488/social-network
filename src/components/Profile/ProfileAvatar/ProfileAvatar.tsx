import React from "react";
import style from './ProfileAvatar.module.css';


export function ProfileAvatar() {
    return (
        <div className={style.profileAvatar}>
            <div>
                <img src="https://u.kanobu.ru/editor/images/52/d9b4f706-1b19-4cd1-bad7-e733370a46dc.png"
                alt="avatar1"/>
            </div>
            <div>
                <img src="https://www.rabstol.net/uploads/gallery/main/621/rabstol_net_one_punch_man_09.jpg"
                alt="avatar2"/>
            </div>
            <div>
                <img src="https://awesomereviews.ru/wp-content/uploads/2015/12/ForMiniature2-752x440.jpg"
                alt="avatar3"/>
            </div>
        </div>
    );
}

