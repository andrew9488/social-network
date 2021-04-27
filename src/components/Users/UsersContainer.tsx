import {connect} from "react-redux";
import {followTC, getUsersTC, unFollowTC, UserType} from "../../redux/usersPageReducer";
import {AppStateType} from "../../redux/redux-store";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

type MapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    disableButton: boolean
    followingInProgress: Array<number>
}


type MapDispatchPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

type OwnTypeProps = {
    onClickCurrentPage: (page: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType & OwnTypeProps

class UsersContainer extends React.PureComponent<UsersClassContainerPropsType> {

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
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        {getUsersTC, followTC, unFollowTC}), withAuthRedirect)(UsersContainer)