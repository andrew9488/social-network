import {ActionType, DialogPageType, MessageType} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newText}) as const

const dialogsPageReducer = (state: DialogPageType, action: ActionType) => {

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