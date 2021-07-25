import {CommonResponseType, instance} from "./api";

type AuthResponseType = {
    id: number
    email: string
    login: string
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