import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "daffbeb3-8fec-4c34-9d8d-6fcb41a16549"
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getCurrentPage(page: number, pageSize: number) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`,)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}



