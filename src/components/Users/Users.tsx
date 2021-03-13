import React from "react";
import style from "./Users.module.css"
import axios from "axios";
import {UserType} from "../../redux/UsersPageReducer";
import UsersPhoto from "../../assets/images/avatars/usersAvatar.jpg"

type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<any>) => void
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }

    render() {
        return (
            <div className={style.usersPage}>
                <div className={style.container}>
                    {
                        this.props.usersPage.map(u => <div key={u.id} className={style.user}>
                            <div className={style.userAvatar}>
                                <img src={u.photos.small != null ? u.photos.small : UsersPhoto}
                                     style={{width: "80px", height: "80px", borderRadius: "100%",}} alt="avatar"/>
                            </div>
                            <div className={style.userData}>
                                <span className={style.name}>{u.name}</span>
                                <span
                                    className={style.status}>Status: {u.status != null ? u.status : "I have not status"}</span>
                                <div className={style.location}>
                                    <span>{"u.location.city"},</span>
                                    <span>{"u.location.country"}</span>
                                </div>
                            </div>
                            <div>
                                {
                                    !u.followed
                                        ? <button onClick={() => this.props.follow(u.id)}>follow</button>
                                        : <button onClick={() => this.props.unFollow(u.id)}>unfollow</button>
                                }
                                <button>message</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }

}

export default Users;