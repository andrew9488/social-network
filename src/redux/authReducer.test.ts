import authReducer, {DataType, InitialStateType, setUserData} from "./authReducer";

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

    const endState = authReducer(initialState, setUserData(24, "var_machine", "abc@mail.ru", true))

    expect(endState.data.email).toBe("abc@mail.ru")
    expect(endState.isAuth).toBe(true)

})