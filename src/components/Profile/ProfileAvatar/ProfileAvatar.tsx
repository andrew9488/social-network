import React from "react";
import style from "./ProfileAvatar.module.css";
import photo1 from "./../../../assets/images/my-photo/my-photo1.png";
import photo2 from "./../../../assets/images/my-photo/my-photo2.jpg";
import photo3 from "./../../../assets/images/my-photo/my-photo3.jpg";


export const ProfileAvatar: React.FC = () => {
    return (
        <div className={style.profileAvatar}>
            <div>
                <img src={photo1}
                     alt="my_photo"/>
            </div>
            <div>
                <img src={photo2}
                     alt="my_photo"/>
            </div>
            <div>
                <img src={photo3}
                     alt="my_photo"/>
            </div>
        </div>
    );
}

