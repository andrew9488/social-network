import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/profilePageReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    isFetching: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 13446
        }
        this.props.getUserProfileTC(userId)
    }

    render() {

        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default withAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {getUserProfileTC})(ProfileContainerWithRouter));

