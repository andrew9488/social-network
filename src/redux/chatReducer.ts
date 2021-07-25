import {chatApi, ChatMessageType} from "../api/chat-api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

export type ChatReducerActionsType = ReturnType<typeof getMessages>
type ThunkType = ThunkAction<void, AppStateType, unknown, ChatReducerActionsType>

const initialState = {
    messages: [] as Array<ChatMessageType>
}
type InitialStateType = typeof initialState

export const chatReducer = (state: InitialStateType = initialState, action: ChatReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "CHAT/GET-MESSAGES":
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        default:
            return state
    }
}

export const getMessages = (messages: Array<ChatMessageType>) =>
    ({type: "CHAT/GET-MESSAGES", messages} as const)

let _newMessageHandler: ((messages: Array<ChatMessageType>) => void) | null = null
let newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(getMessages(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListeningTC = (): ThunkType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ChatReducerActionsType>) => {
        chatApi.start()
        chatApi.subscribe(newMessageHandlerCreator(dispatch))
    }
export const stopMessagesListeningTC = (): ThunkType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ChatReducerActionsType>) => {
        chatApi.stop()
        chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
    }
export const sendMessageChatTC = (message: string): ThunkType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ChatReducerActionsType>) => {
        chatApi.sendMessage(message)
    }