import React, {useState} from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/UsersPageReducer";
import UsersPhoto from "../../assets/images/avatars/usersAvatar.jpg";
import preloader from "../../assets/images/logo/Rolling-1s-231px.svg";


type UsersPropsType = {
    usersPage: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<any>) => void
    onClickCurrentPage: (page: number) => void
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
}

export function Users(props: UsersPropsType) {

    const [portionNumber, setPortionNumber] = useState<number>(1)

    let countPage = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }

    let portionSize = 10;
    let portionCount = Math.ceil((countPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.usersPage}>
            <div className={style.page}>
                <div className={style.paginator}>
                    {portionNumber > 1 &&
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p, index) => {
                            return <span key={index} onClick={() => {
                                props.onClickCurrentPage(p)
                            }}
                                         className={props.currentPage === p ? style.currentPage : ''}>{p}</span>
                        })}
                    {portionCount > portionNumber &&
                    <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
                </div>
            </div>
            {props.isFetching ? <img src={preloader} alt="preloader" className={style.preloader}/>
                : <div className={style.container}>
                    {
                        props.usersPage.map(u => <div key={u.id} className={style.user}>
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
                                        ? <button onClick={() => props.follow(u.id)}>follow</button>
                                        : <button onClick={() => props.unFollow(u.id)}>unfollow</button>
                                }
                                <button>message</button>
                            </div>
                        </div>)
                    }
                </div>}
        </div>
    )
}