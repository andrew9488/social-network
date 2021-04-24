import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authTC} from "./authReducer";

type AppReducerActionsType = ReturnType<typeof initializeSuccess>

type ThunkType = ThunkAction<void, AppStateType, unknown, AppReducerActionsType>

const initialState = {
    isInitialization: false
}

export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {

    switch (action.type) {
        case "INITIALIZE-SUCCESS":
            return {
                ...state,
                isInitialization: action.isInitialization
            }
        default:
            return state;
    }
}

export default appReducer;

export const initializeSuccess = (isInitialization: boolean) => ({type: "INITIALIZE-SUCCESS", isInitialization} as const)

export const appInitializeTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AppReducerActionsType>) => {
        let authPromise = dispatch(authTC())
        Promise.all([authPromise]).then(() => {
            dispatch(initializeSuccess(true))
        })
    }
}
