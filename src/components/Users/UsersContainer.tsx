import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UserType
} from "../../redux/UsersPageReducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    usersPage: Array<UserType>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}

type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unFollow: (UserId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)