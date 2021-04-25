export type DialogsPageReducerActionsType = ReturnType<typeof sendMessageActionCreator>

export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
    img: string
};

const initialState = {
    dialogs: [
        {
            id: 1,
            name: "King",
            img: "http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg"
        },
        {id: 2, name: "Puri-Puri Prisoner", img: "https://gamemag.ru/images/cache/News/News143316/c7a2dbcde1-3_350x250.jpg"},
        {
            id: 3,
            name: "Tatsumaki",
            img: "https://pm1.narvii.com/6890/6c7770044db1962ef51f199fa113165478d1f69er1-1321-1080v2_hq.jpg"
        },
        {id: 4, name: "Fubuki", img: "https://shikimori.one/system/characters/original/81931.jpg"},
        {id: 5, name: "Watchdog Man", img: "https://slovnet.ru/wp-content/uploads/2019/05/8-32.jpg"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hello my friend!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Will you go to the cinema with us?"},
        {id: 4, message: "Can i help you?"},
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsPageReducer = (state: InitialStateType = initialState, action: DialogsPageReducerActionsType): InitialStateType => {

    switch (action.type) {
        case "DIALOGS-PAGE/SEND-MESSAGE":
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.newText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export default dialogsPageReducer;

export const sendMessageActionCreator = (newText: string) => ({type: "DIALOGS-PAGE/SEND-MESSAGE", newText}) as const