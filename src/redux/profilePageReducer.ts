import myAvatar from '../assets/images/avatars/myAvatar.jpg';
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE_DATA = "SET-USER-PROFILE-DATA";

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (newPostText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText}) as const

export const setUserProfileData = (profile: ProfileType) =>
    ({type: SET_USER_PROFILE_DATA, profile}) as const

export const setIsFetchingProfileComponent = (isFetching: boolean) => ({
    type: "SET-IS-FETCHING-PROFILE-COMPONENT",
    isFetching
} as const)

const setProfileStatus = (status: string) => ({
    type: "SET-PROFILE-STATUS",
    status
} as const)

export type ProfilePageReducerActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfileData>
    | ReturnType<typeof setIsFetchingProfileComponent>
    | ReturnType<typeof setProfileStatus>


type ThunkType = ThunkAction<void, AppStateType, unknown, ProfilePageReducerActionsType>

export const getUserProfileTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>,
            getState: () => AppStateType) => {
        dispatch(setIsFetchingProfileComponent(true))
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileData(data));
                dispatch(setIsFetchingProfileComponent(false))
            })
    }

}

export const getUserStatusTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>,
            getState: () => AppStateType) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setProfileStatus(data))
            })
    }
}

export const updateStatusTC = (status: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>,
            getState: () => AppStateType) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}
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
        fullName: "Andrew Pashkevich",
        userId: 13446,
        photos: {
            small: myAvatar,
            large: myAvatar
        }
    } as ProfileType,
    newPostText: "",
    isFetching: false,
    status: ""
}


export type InitialStateType = typeof initialState

const profilePageReducer = (state: InitialStateType = initialState, action: ProfilePageReducerActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCounter: 0,
            };
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                profile: action.profile
            }
        case "SET-IS-FETCHING-PROFILE-COMPONENT":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SET-PROFILE-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profilePageReducer;