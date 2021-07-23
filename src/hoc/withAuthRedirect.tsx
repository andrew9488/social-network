import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {PATH} from "../components/Routes/Routes";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={PATH.LOGIN}/>
        return <Component {...restProps as T}/>
    }

    return  connect(mapStateToProps, {})(RedirectComponent)
}