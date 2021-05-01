import myAvatar from "../assets/images/my-photo/my-photo1.png";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";

export type ProfilePageReducerActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfileData>
    | ReturnType<typeof setIsFetchingProfileComponent>
    | ReturnType<typeof setProfileStatus>
    | ReturnType<typeof increaseLike>
    | ReturnType<typeof setProfileImage>

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
    instagram: string | null,
    youtube: string | null,
    github: string | null,
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
        small: string | null
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
        aboutMe: "Hero class-C",
        contacts: {
            facebook: null,
            website: "saitama_hero.com",
            vk: null,
            twitter: null,
            instagram: "https://www.saitama.com/__hero_saitama/",
            youtube: null,
            github: "https://github.com/saitama_hero",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "Hero class-S",
        fullName: null as "Saitama" | null,
        userId: 1,
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
        case "PROFILE-PAGE/INCREASE-LIKE": {
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.postId ? {...p, likesCounter: p.likesCounter + 1} : p)
            }
        }
        case "PROFILE-PAGE/SET-PROFILE-IMAGE": {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...state.profile.photos,
                        large: action.photo,
                        small: action.photo
                    }
                }
            }
        }
        default:
            return state;
    }
}

export default profilePageReducer;

export const addPost = (postText: string) => ({type: "PROFILE-PAGE/ADD-POST", postText} as const)
export const setUserProfileData = (profile: ProfileType) =>
    ({type: "PROFILE-PAGE/SET-USER-PROFILE-DATA", profile} as const)
export const setIsFetchingProfileComponent = (isFetching: boolean) =>
    ({type: "PROFILE-PAGE/SET-IS-FETCHING-PROFILE-COMPONENT", isFetching} as const)
export const setProfileStatus = (status: string) =>
    ({type: "PROFILE-PAGE/SET-PROFILE-STATUS", status} as const)
export const increaseLike = (postId: number) =>
    ({type: "PROFILE-PAGE/INCREASE-LIKE", postId} as const)
export const setProfileImage = (photo: string) =>
    ({type: "PROFILE-PAGE/SET-PROFILE-IMAGE", photo} as const)

export const getUserProfileTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        dispatch(setIsFetchingProfileComponent(true))
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileData(data));
                dispatch(setIsFetchingProfileComponent(false))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const getUserStatusTC = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setProfileStatus(data))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const updateStatusTC = (status: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
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

export const uploadPhotoTC = (photos: Blob): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfilePageReducerActionsType>) => {
        profileAPI.uploadPhoto(photos)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileImage(data.data.photos.large))
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