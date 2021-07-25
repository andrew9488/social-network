import axios from "axios";

export type CommonResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "daffbeb3-8fec-4c34-9d8d-6fcb41a16549"
    }
})