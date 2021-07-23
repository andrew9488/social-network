import React, {useEffect} from "react";
import style from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";
import {SearchField} from "../common/SearchField/SearchField";
import {useHistory} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import * as querystring from "querystring";

type QueryObjType = { term?: string, friend?: string, page?: string }
export const Users: React.FC<UsersPropsType> = React.memo((props) => {

    const history = useHistory()

    useEffect(() => {
        const parsed = querystring.parse(history.location.search.substr(1)) as QueryObjType
        let actualPage = props.currentPage
        let actualTerm = props.term !== null ? props.term : ""
        let actualFriend = props.friend

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualTerm = parsed.term
        // parsed.term !== "null" ? actualTerm = parsed.term as string : actualTerm = ""

        switch (parsed.friend) {
            case "null":
                actualFriend = null
                break
            case "true":
                actualFriend = true
                break
            case "false":
                actualFriend = false
                break
        }
        props.getUsersTC(actualPage, props.pageSize, actualTerm, actualFriend)
    }, [])

    useEffect(() => {
        const query: QueryObjType = {}
        if (!!props.term) query.term = props.term
        if (props.friend !== null) query.friend = String(props.friend)
        if (props.currentPage !== 1) query.page = String(props.currentPage)

        history.push({
            pathname: PATH.USERS,
            search: querystring.stringify(query)
        })
    }, [props.term, props.friend, props.currentPage])

    return (
        <div className={style.usersPage}>
            <SearchField getUsers={props.getUsersTC}
                         pageSize={props.pageSize}
                         term={props.term}
                         friend={props.friend}
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


