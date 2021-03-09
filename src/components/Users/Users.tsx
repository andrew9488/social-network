import React from "react";
import style from "./Users.module.css"
import axios from "axios";
import {UserType} from "../../redux/UsersPageReducer";
import UserPhoto from "../../assets/images/avatars/userAvatar.jpg"

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
                {
                    this.props.usersPage.map(u => <div key={u.id}>
                        <div className={style.user}>
                            <div className={style.userAvatar}>
                                <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                     style={{width: "80px", height: "80px", borderRadius: "100%",}} alt="avatar"/>
                            </div>
                            <div>
                                {
                                    !u.followed
                                        ? <button onClick={() => this.props.follow(u.id)}>follow</button>
                                        : <button onClick={() => this.props.unFollow(u.id)}>unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={style.userData}>
                            <div className={style.name}>{u.name}</div>
                            <div className={style.status}>{u.status != null ? u.status : "I have not status"}</div>
                            <div className={style.location}>
                                <div>{"u.location.city"},</div>
                                <div>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }

}

export default Users;