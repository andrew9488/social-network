import {connect} from "react-redux";
import {followTC, getUsersTC, unFollowTC, UserType} from "../../redux/usersPageReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type UsersClassContainerPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    disableButton: boolean
    followingInProgress: Array<number>
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    disableButton: boolean
    followingInProgress: Array<number>
}


type MapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

type OwnTypeProps = {
    onClickCurrentPage: (page: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnTypeProps

class UsersContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onClickCurrentPage = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
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
        disableButton: state.usersPage.disableButton,
    }
}

export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        getUsersTC, followTC, unFollowTC
    })(UsersContainer))