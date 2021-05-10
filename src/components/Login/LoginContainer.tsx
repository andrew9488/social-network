import {ComponentType} from "react"
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {Login} from "./Login";
import {logInTC} from "../../redux/authReducer";

type MapStatePropsType = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchPropsType = {
    logInTC: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => void
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {logInTC}))(Login)