import React from "react";
import style from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";
import {SearchField} from "../common/SearchField/SearchField";

export const Users: React.FC<UsersPropsType> = React.memo((props) => {

    return (
        <div className={style.usersPage}>
            <SearchField getUsers={props.getUsersTC}
                         pageSize={props.pageSize}
            />
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       onClickCurrentPage={props.onClickCurrentPage}
                       currentPage={props.currentPage}/>
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


