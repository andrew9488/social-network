import React, {ComponentType} from "react"
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {Login} from "./Login";
import {logInTC} from "../../redux/authReducer";

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    logInTC: (email: string | null, password: string | null, rememberMe: boolean) => void
}

const MapStateToProps = (state: AppStateType)=>{
    return {
        isAuth: state.auth.isAuth
    }
}

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {logInTC}))(Login)