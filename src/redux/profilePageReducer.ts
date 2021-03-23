import myAvatar from '../assets/images/avatars/myAvatar.jpg';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE_DATA = "SET-USER-PROFILE-DATA";

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (newPostText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText}) as const

export const setUserProfileData = (profile: ProfileType) =>
    ({type: SET_USER_PROFILE_DATA, profile}) as const

export type ProfilePageReducerActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfileData>

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
    aboutMe: string | null,
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
    newPostText: ""
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
        default:
            return state;
    }
}

export default profilePageReducer;