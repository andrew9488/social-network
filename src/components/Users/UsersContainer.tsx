import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setIsFetchingActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UsersPageReducerActionsType,
    UserType
} from "../../redux/UsersPageReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


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
}

class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onClickCurrentPage = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Users
                    usersPage={this.props.usersPage}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    setUsers={this.props.setUsers}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onClickCurrentPage={this.onClickCurrentPage}
                    isFetching={this.props.isFetching}
                />
            </React.Fragment>
        )
    }

}

type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unFollow: (UserId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

const mapDispatchToProps = (dispatch: Dispatch<UsersPageReducerActionsType>): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountActionCreator(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)