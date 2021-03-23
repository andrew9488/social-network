import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFollowingProgress,
    setIsFetching,
    setTotalCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/usersPageReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {userAPI} from "../../api/api";

type UsersClassContainerPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    setFollowingProgress: (isFetching: boolean, userId: number) => void
}

type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unFollow: (UserId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setFollowingProgress: (isFetching: boolean, userId: number) => void
}

type OwnTypeProps = {
    onClickCurrentPage: (page: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnTypeProps

class UsersContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    }

    onClickCurrentPage = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        userAPI.getCurrentPage(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Users {...this.props}
                       onClickCurrentPage={this.onClickCurrentPage}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow, unFollow, setUsers, setCurrentPage, setTotalCount, setIsFetching, setFollowingProgress
    })(UsersContainer)