import dialogsPageReducer, {
    InitialStateType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "./dialogsPageReducer";

let initialState: InitialStateType;

beforeEach(() => {

    initialState = {
        dialogs: [
            {
                id: 1,
                name: "Anton",
                img: "http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg"
            },
            {id: 2, name: "Oleg", img: "https://gamemag.ru/images/cache/News/News143316/c7a2dbcde1-3_350x250.jpg"},
            {
                id: 3,
                name: "Anna",
                img: "https://pm1.narvii.com/6890/6c7770044db1962ef51f199fa113165478d1f69er1-1321-1080v2_hq.jpg"
            },
            {id: 4, name: "Julia", img: "https://shikimori.one/system/characters/original/81931.jpg"},
            {id: 5, name: "Rimma", img: "https://slovnet.ru/wp-content/uploads/2019/05/8-32.jpg"},
        ],
        messages: [
            {id: 1, message: "Hello my friend!"},
            {id: 2, message: "What are you doing?"},
            {id: 3, message: "Will you go to the cinema with us?"},
            {id: 4, message: "Can i help you?"},
        ],
        newMessageText: ""
    }
})

test("new message should be send", () => {

    const endState = dialogsPageReducer(initialState, sendMessageActionCreator());

    expect(endState.messages.length).toBe(5)

})

test("new message should be update", () => {

    const newText = "NewTextMessage"

    const endState = dialogsPageReducer(initialState, updateNewMessageTextActionCreator(newText))

    expect(endState.newMessageText).toBe(newText)

})