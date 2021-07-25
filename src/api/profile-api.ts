import {ProfileType} from "../redux/profilePageReducer";
import {ProfileFormPropsType} from "../components/Profile/ProfileData/ProfileForm";
import {CommonResponseType, instance} from "./api";

export type PhotoType = {
    photos: {
        large: string
        small: string
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