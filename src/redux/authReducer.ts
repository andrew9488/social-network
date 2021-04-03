import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

export const setUserData = (userId: number, login: string, email: string) => ({
    type: "SET-USER-DATA",
    data: {userId, login, email}
} as const)

type AuthReducerActionsType = ReturnType<typeof setUserData>

type ThunkType = ThunkAction<void, AppStateType, unknown, AuthReducerActionsType>

export const authTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthReducerActionsType>,
            getState: () => AppStateType) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, login, email));
                }
            })
    }
}

export type DataType = {
    userId: number | null
    login: string | null
    email: string | null
}

const initialState = {
    data: {
        userId: null,
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
                isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;