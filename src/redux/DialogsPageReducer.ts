const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newText}) as const

export type DialogsPageReducerActionsType = ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>

export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
    img: string
};

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
};

const initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Anton", img: "http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg"},
        {id: 2, name: "Oleg", img:"https://gamemag.ru/images/cache/News/News143316/c7a2dbcde1-3_350x250.jpg"},
        {id: 3, name: "Anna", img: "https://pm1.narvii.com/6890/6c7770044db1962ef51f199fa113165478d1f69er1-1321-1080v2_hq.jpg"},
        {id: 4, name: "Julia", img: "https://shikimori.one/system/characters/original/81931.jpg"},
        {id: 5, name: "Rimma", img:"https://slovnet.ru/wp-content/uploads/2019/05/8-32.jpg"},
    ],
    messages: [
        {id: 1, message: "Hello my friend!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Will you go to the cinema with us?"},
        {id: 4, message: "Can i help you?"},
    ],
    newMessageText: ""
}

const dialogsPageReducer = (state: DialogPageType = initialState, action: DialogsPageReducerActionsType): DialogPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            };
            return {...state,
            newMessageText: "",
            messages:[...state.messages, newMessage]}
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state,
            newMessageText: action.newMessageText}
        default:
            return state;
    }
}

export default dialogsPageReducer;