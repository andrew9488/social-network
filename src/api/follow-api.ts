import {CommonResponseType, instance} from "./api";

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