import React from "react";
import style from "./ProfileAvatar.module.css";
import photo1 from "./../../../assets/images/avatars/city-D.png";
import photo2 from "./../../../assets/images/avatars/city-A.png";
import photo3 from "./../../../assets/images/avatars/city-Z.png";


export const ProfileAvatar: React.FC = () => {
    return (
        <div className={style.profileAvatar}>
            <div>
                <img src={photo1} alt="city-D"/>
            </div>
            <div>
                <img src={photo2} alt="city-A"/>
            </div>
            <div>
                <img src={photo3} alt="city-Z"/>
            </div>
        </div>
    );
}

