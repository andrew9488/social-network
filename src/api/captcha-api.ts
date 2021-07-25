import {CommonResponseType, instance} from "./api";

export const captchaAPI = {
    getCaptcha() {
        return instance.get<CommonResponseType<{ url: string }>>(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    }
}