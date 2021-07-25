import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    changeProfileInfoTC,
    getUserProfileTC,
    getUserStatusTC,
    ProfileType,
    updateStatusTC,
    uploadPhotoTC
} from "../../redux/profilePageReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileFormPropsType} from "./ProfileData/ProfileForm";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    isFetching: boolean
    status: string
    myId: number
    isOwner?: boolean
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
    uploadPhotoTC: (photos: Blob) => void
    changeProfileInfoTC: (profile: ProfileFormPropsType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.PureComponent<PropsType> {

    refresh() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.myId
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    componentDidMount() {
        this.refresh()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refresh()
        }
    }

    render() {
        return (
            <Profile isOwner={this.props.match.params.userId === ":userId"}{...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        myId: state.auth.data.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        {
            getUserProfileTC,
            getUserStatusTC,
            updateStatusTC,
            uploadPhotoTC,
            changeProfileInfoTC
        }), withRouter, withAuthRedirect)(ProfileContainer)
