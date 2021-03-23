export const setUserData = (userId: number, login: string, email: string ) => ({type: "SET-USER-DATA", data:{userId, login, email}} as const)
export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)


export type AuthReducerActionsType = ReturnType<typeof setUserData>
    | ReturnType<typeof unFollow>


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