import {UserType} from "../../redux/usersPageReducer";
import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import UsersPhoto from "../../assets/images/avatars/usersAvatar.jpg";

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}
export const User: React.FC<UserPropsType> = (props) => {
    return (
        <div className={style.user}>
            <div className={style.userAvatar}>
                <NavLink to={"/profile/" + props.user.id}>
                    <img src={props.user.photos.small !== null ? props.user.photos.small : UsersPhoto}
                         alt="avatar"/>
                </NavLink>
            </div>
            <div className={style.userData}>
                <span className={style.name}>{props.user.name}</span>
                <span
                    className={style.status}>{props.user.status !== null ? props.user.status : "I have not status"}</span>
            </div>
            <div>
                {
                    !props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.followTC(props.user.id)
                                  }}>follow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unFollowTC(props.user.id)
                                  }}>unfollow</button>
                }
                <button>message</button>
            </div>
        </div>
    )
}