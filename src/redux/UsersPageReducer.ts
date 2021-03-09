export const followActionCreator = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollowActionCreator = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersActionCreator = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)


type ActionsType = ReturnType<typeof followActionCreator>
    | ReturnType<typeof unFollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>


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
}

type InitialStateType = {
    users: Array<UserType>
}
const initialState: InitialStateType = {
    users: [
    ],
}


/*
const initialState = {
    users: [
        {
            id: 1, fullName: "Anton Borozna", status: "I am learning JAVA", followed: true,
            img: "http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2, fullName: "Misha Dubeiko", status: "I want to grow hair", followed: false,
            img: "https://cdn.anisearch.com/images/character/cover/full/68/68527.jpg",
            location: {country: "Denmark", city: "Kopenhagen"}
        },
        {
            id: 3, fullName: "Anna Storm", status: "I won’t take advice from Andrew", followed: true,
            img: "https://pm1.narvii.com/6890/6c7770044db1962ef51f199fa113165478d1f69er1-1321-1080v2_hq.jpg",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 4, fullName: "Dmitriy Prokopovich", status: "Why Kate don't love me?", followed: false,
            img: "https://steamuserimages-a.akamaihd.net/ugc/840335235114018527/2BC1ABBB312428E16725B7AD99BEC0309D87B4A7/",
            location: {country: "Belgium", city: "Antwerpen"}
        },
    ]
}
*/

//export type usersType = typeof initialState.users

//export type InitialStateType = typeof initialState

const usersPageReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export default usersPageReducer;