import axios from "axios";
import {UserType} from "../redux/usersPageReducer";
import {ProfileType} from "../redux/profilePageReducer";
import {ProfileFormPropsType} from "../components/Profile/ProfileData/ProfileForm";

type CommonResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

type AuthResponseType = {
    id: number
    email: string
    login: string
}

export type PhotoType = {
    photos: {
        large: string
        small: string
    }
}

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "daffbeb3-8fec-4c34-9d8d-6fcb41a16549"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string | null = "", friend: boolean | null) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    follow(id: number) {
        return instance.post<CommonResponseType>(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unFollow(id: number) {
        return instance.delete<CommonResponseType>(`follow/${id}`,)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    uploadPhoto(data: Blob) {
        const formData = new FormData()
        formData.append(`image`, data)
        return instance.put<CommonResponseType<PhotoType>>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                return response.data
            })
    },
    updateProfileInfo(profile: ProfileFormPropsType) {
        return instance.put<CommonResponseType>(`profile`, profile)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get<CommonResponseType<AuthResponseType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    logIn(email: string | null, password: string | null, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<CommonResponseType<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(response => {
                return response.data
            })
    },
    logOut() {
        return instance.delete<CommonResponseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    },

}

export const captchaAPI = {
    getCaptcha() {
        return instance.get<CommonResponseType<{ url: string }>>(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    }
}