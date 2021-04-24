import authReducer, {DataType, InitialStateType, setIsAuth, setUserData} from "./authReducer";

let initialState: InitialStateType;

beforeEach(() => {

    initialState = {
        data: {
            userId: null as number | null,
            login: null,
            email: null
        } as DataType,
        isAuth: false
    }

})

test("user data should be set", () => {

    const endState = authReducer(initialState, setUserData(24, "var_machine", "abc@mail.ru"))

    expect(endState.data.email).toBe("abc@mail.ru")

})

test("isAuth should be set", () => {

    const endState = authReducer(initialState, setIsAuth(true))

    expect(endState.isAuth).toBeTruthy()

})