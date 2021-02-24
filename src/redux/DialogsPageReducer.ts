import {ActionType} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newText}) as const

export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
};

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
};

const initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Anton"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Julia"},
        {id: 5, name: "Rimma"},
    ],
    messages: [
        {id: 1, message: "Hello my friend!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Will you go to the cinema with us?"},
        {id: 4, message: "Can i help you?"},
    ],
    newMessageText: ""
}

const dialogsPageReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export default dialogsPageReducer;