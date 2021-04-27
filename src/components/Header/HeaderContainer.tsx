import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, logOutTC} from "../../redux/authReducer";

type MapStatePropsType = {
    data: DataType
    isAuth: boolean
}

type MapDispatchPropsType = {
    logOutTC: () => void
}

type HeaderContainerPropsType = {
    data: DataType
    isAuth: boolean
    logOutTC: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.PureComponent<HeaderContainerPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {logOutTC})(HeaderContainer)
