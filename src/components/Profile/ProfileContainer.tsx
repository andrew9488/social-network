import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfileData} from "../../redux/profilePageReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToProps = {
    setUserProfileData: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 13446
        }
        userAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfileData(data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setUserProfileData})(ProfileContainerWithRouter);

