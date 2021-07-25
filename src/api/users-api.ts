import {instance} from "./api";
import {UserType} from "../redux/usersPageReducer";

type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string | null = "", friend: boolean | null) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))
            .then(response => {
                return response.data
            })
    }
}