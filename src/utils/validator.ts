export const required = (value: string) => {
    if (value) {
        return undefined
    } else {
        return "Field is required"
    }
}

export const maxLength = (max: number) => {
    return (value: string) => {
        if (value && value.length > max) {
            return `Maximum length is ${max} symbols`
        }
    }
}
