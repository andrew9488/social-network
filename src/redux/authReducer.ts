import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {captchaAPI} from "../api/captcha-api";

type AuthReducerActionsType =
    ReturnType<typeof setUserData>
    | ReturnType<typeof setIsAuth>
    | ReturnType<typeof setCaptcha>

type StopSubmitActionsType = ReturnType<typeof stopSubmit>

type ThunkType = ThunkAction<void, AppStateType, unknown, AuthReducerActionsType>

export type DataType = {
    userId: number
    login: string | null
    email: string | null
}

const initialState = {
    data: {
        userId: null as number | null,
        login: null,
        email: null
    } as DataType,
    isAuth: false,
    captcha: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {

    switch (action.type) {
        case "AUTH/SET-USER-DATA":
            return {
                ...state,
                data: action.data,
            }
        case "AUTH/SET-IS-AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            }
        case "AUTH/SET-CAPTCHA":
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

export default authReducer;

export const setUserData = (userId: number, login: string, email: string) =>
    ({type: "AUTH/SET-USER-DATA", data: {userId, login, email}} as const)
export const setIsAuth = (isAuth: boolean) => ({type: "AUTH/SET-IS-AUTH", isAuth} as const)
export const setCaptcha = (captcha: null | string) => ({type: "AUTH/SET-CAPTCHA", captcha} as const)

export const authTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType>) => {
        return authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, login, email));
                    dispatch(setIsAuth(true))
                } else {
                    if (data.messages.length > 0) {
                        console.warn(data.messages[0])
                    }
                }
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logInTC = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType | StopSubmitActionsType>) => {
        authAPI.logIn(email, password, rememberMe, captcha)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(authTC())
                    } else if (data.resultCode === 10) {
                        dispatch(getCaptchaTC())
                    } else if (data.resultCode === 1) {
                        const error = data.messages[0]
                        dispatch(stopSubmit("login", {_error: error}))
                    } else if (data.messages.length > 0) {
                        console.warn(data.messages[0])
                    }
                }
            )
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logOutTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType>) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(logInTC(null, null, false, null))
                    dispatch(setIsAuth(false))
                } else {
                    if (data.messages.length > 0) {
                        console.warn(data.messages[0])
                    }
                }
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const getCaptchaTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType>) => {
        captchaAPI.getCaptcha()
            .then(response => {
                dispatch(setCaptcha(response.data.url))
            })
    }
}