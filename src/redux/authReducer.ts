import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type AuthReducerActionsType = ReturnType<typeof setUserData>
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
    isAuth: false
}

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth: action.data.isAuth
            }
        default:
            return state;
    }
}

export default authReducer;

export const setUserData = (userId: number, login: string, email: string, isAuth: boolean) => ({
    type: "SET-USER-DATA",
    data: {userId, login, email, isAuth}
} as const)

export const authTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType>) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, login, email, true));
                }
            })
    }
}

export const logInTC = (email: string | null, password: string | null, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType | StopSubmitActionsType>) => {
        authAPI.logIn(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authTC())
                } else if (data.resultCode === 1) {
                    const error = data.messages[0]
                    dispatch(stopSubmit("login", {_error: error}))
                }
            })
    }
}

export const logOutTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType>) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(logInTC(null, null, false))
                }
            })
    }
}