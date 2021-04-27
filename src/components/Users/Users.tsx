import React, {useState} from "react";
import style from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User";

export const Users: React.FC<UsersPropsType> = React.memo((props) => {

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
            {props.isFetching ? <Preloader/>
                : <div className={style.container}>
                    {
                        props.usersPage.map(u => <User key={u.id}
                                                       user={u}
                                                       followingInProgress={props.followingInProgress}
                                                       followTC={props.followTC}
                                                       unFollowTC={props.unFollowTC}/>)
                    }
                </div>}
        </div>
    );
})


