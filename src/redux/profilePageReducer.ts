import myAvatar from "../assets/images/avatars/myAvatar.jpg";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";

export type ProfilePageReducerActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfileData>
    | ReturnType<typeof setIsFetchingProfileComponent>
    | ReturnType<typeof setProfileStatus>

type ThunkType = ThunkAction<void, AppStateType, unknown, ProfilePageReducerActionsType>

export type PostType = {
    id: number
    post: string
    likesCounter: number
};

type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: "https://www.instagram.com/__pashkevich_/" | null,
    youtube: string | null,
    github: "https://github.com/andrew9488" | null,
    mainLink: string | null
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

const initialState = {
    posts: [
        {id: 1, post: "Hello my dear friends.", likesCounter: 2},
        {id: 2, post: "My name is Andrew.", likesCounter: 5},
        {id: 3, post: "This is my first project.", likesCounter: 3},
        {id: 4, post: "I am going to change my future.", likesCounter: 7},
    ] as Array<PostType>,
    profile: {
        aboutMe: "Student of IT-Incubator",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: "https://www.instagram.com/__pashkevich_/",
            youtube: null,
            github: "https://github.com/andrew9488",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "Looking vacancy of Frontend Developer by React.js",
        fullName: null as "Andrew Pashkevich" | null,
        userId: 13446,
        photos: {
            small: myAvatar,
            large: myAvatar
        }
    } as ProfileType,
    isFetching: false,
    status: ""
}

export type InitialStateType = typeof initialState

const profilePageReducer = (state: InitialStateType = initialState, action: ProfilePageReducerActionsType): InitialStateType => {

    switch (action.type) {
        case "PROFILE-PAGE/ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.postText,
                likesCounter: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "PROFILE-PAGE/SET-USER-PROFILE-DATA":
            return {
                ...state,
                profile: action.profile
            }
        case "PROFILE-PAGE/SET-IS-FETCHING-PROFILE-COMPONENT":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "PROFILE-PAGE/SET-PROFILE-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profilePageReducer;

export const addPostActionCreator = (postText: string) => ({type: "PROFILE-PAGE/ADD-POST", postText} as const)

export const setUserProfileData = (profile: ProfileType) =>
    ({type: "PROFILE-PAGE/SET-USER-PROFILE-DATA", profile} as const)

export const setIsFetchingProfileComponent = (isFetching: boolean) =>
    ({type: "PROFILE-PAGE/SET-IS-FETCHING-PROFILE-COMPONENT", isFetching} as const)

export const setProfileStatus = (status: string) =>
    ({type: "PROFILE-PAGE/SET-PROFILE-STATUS", status} as const)

export const getUserProfileTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        dispatch(setIsFetchingProfileComponent(true))
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileData(data));
                dispatch(setIsFetchingProfileComponent(false))
            })
    }

}

export const getUserStatusTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setProfileStatus(data))
            })
    }
}

export const updateStatusTC = (status: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}