import appReducer, {initializeSuccess, InitialStateType} from "./appReducer";

let initialState: InitialStateType;
beforeEach(() => {
    initialState = {
        isInitialization: false
    }
})

test("initialization should be success", () => {

    const endState = appReducer(initialState, initializeSuccess(true))

    expect(endState.isInitialization).toBeTruthy()
})