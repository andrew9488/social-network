import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {followAPI, usersAPI} from "../api/api";
import {objectHelpers} from "../utils/objectHelpers";

export type UsersPageReducerActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsFetchingUsersComponent>
    | ReturnType<typeof setFollowingProgress>

type ThunkType = ThunkAction<void, AppStateType, unknown, UsersPageReducerActionsType>

type LocationType = {
    country: string,
    city: string
}

type PhotoType = {
    small: null | string
    large: null | string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: null | string
    followed: boolean
    location: LocationType
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    disableButton: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: null as string | null,
        friend: null as boolean | null
    }
}

export type InitialStateType = typeof initialState

const usersPageReducer = (state: InitialStateType = initialState, action: UsersPageReducerActionsType): InitialStateType => {

    switch (action.type) {
        case "USERS-PAGE/FOLLOW":
            return {
                ...state,
                users: objectHelpers(state.users, action.userId, "id", {followed: true})
            }
        case "USERS-PAGE/UNFOLLOW":
            return {
                ...state,
                users: objectHelpers(state.users, action.userId, "id", {followed: false})
            }
        case "USERS-PAGE/SET-USERS":
            return {...state, users: action.users}
        case "USERS-PAGE/SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "USERS-PAGE/SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "USERS-PAGE/SET-IS-FETCHING-USERS-COMPONENT":
            return {...state, isFetching: action.isFetching}
        case "USERS-PAGE/SET-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.disableButton
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersPageReducer;

export const follow = (userId: number) => ({type: "USERS-PAGE/FOLLOW", userId} as const)
export const unFollow = (userId: number) => ({type: "USERS-PAGE/UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "USERS-PAGE/SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "USERS-PAGE/SET-CURRENT-PAGE", currentPage} as const)
export const setTotalCount = (totalCount: number) => ({type: "USERS-PAGE/SET-TOTAL-COUNT", totalCount} as const)
export const setIsFetchingUsersComponent = (isFetching: boolean) =>
    ({type: "USERS-PAGE/SET-IS-FETCHING-USERS-COMPONENT", isFetching} as const)
export const setFollowingProgress = (disableButton: boolean, userId: number) =>
    ({type: "USERS-PAGE/SET-FOLLOWING-PROGRESS", disableButton, userId} as const)

export const getUsersTC = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, UsersPageReducerActionsType>) => {
        dispatch(setIsFetchingUsersComponent(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingUsersComponent(false))
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(setCurrentPage(currentPage))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const followTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, UsersPageReducerActionsType>) => {
        dispatch(setFollowingProgress(true, userId))
        followAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                } else {
                    if (data.messages.length > 0) {
                        console.warn(data.messages[0])
                    }
                }
                dispatch(setFollowingProgress(false, userId))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const unFollowTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, UsersPageReducerActionsType>) => {
        dispatch(setFollowingProgress(true, userId))
        followAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(userId))
                } else {
                    if (data.messages.length > 0) {
                        console.warn(data.messages[0])
                    }
                }
                dispatch(setFollowingProgress(false, userId))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}
