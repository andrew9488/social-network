export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalCount = (totalCount: number) => ({type: "SET-TOTAL-COUNT", totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: "SET-IS-FETCHING", isFetching} as const)
export const setFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "SET-FOLLOWING-PROGRESS",
    isFetching,
    userId
} as const)


export type UsersPageReducerActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setFollowingProgress>

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
    followingInProgress: [] as Array<number>
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

export type InitialStateType = typeof initialState

const usersPageReducer = (state: InitialStateType = initialState, action: UsersPageReducerActionsType): InitialStateType => {

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
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersPageReducer;