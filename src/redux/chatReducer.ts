import {chatApi, ChatMessageType, StatusType} from "../api/chat-api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

export type ChatReducerActionsType =
    ReturnType<typeof getMessages>
    | ReturnType<typeof changeStatus>
    | ReturnType<typeof cleanMessages>
type ThunkType = ThunkAction<void, AppStateType, unknown, ChatReducerActionsType>


const initialState = {
    messages: [] as Array<ChatMessageType>,
    status: "pending" as StatusType
}
type InitialStateType = typeof initialState

export const chatReducer = (state: InitialStateType = initialState, action: ChatReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "CHAT/GET-MESSAGES":
            debugger
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
                    .filter((m, ind, arr) => ind >= arr.length - 100)
            }
        case "CHAT/CLEAN-MESSAGES": {
            return {
                ...state,
                messages: []
            }
        }
        case "CHAT/CHANGE-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const getMessages = (messages: Array<ChatMessageType>) =>
    ({type: "CHAT/GET-MESSAGES", messages} as const)
export const cleanMessages = () =>
    ({type: "CHAT/CLEAN-MESSAGES"} as const)
export const changeStatus = (status: StatusType) =>
    ({type: "CHAT/CHANGE-STATUS", status} as const)

let _newMessageHandler: ((messages: Array<ChatMessageType>) => void) | null = null
let newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(getMessages(messages))
        }
    }
    return _newMessageHandler
}

let _statusHandler: ((status: StatusType) => void) | null = null
let statusHandlerCreator = (dispatch: Dispatch) => {
    if (_statusHandler === null) {
        _statusHandler = (status) => {
            dispatch(changeStatus(status))
        }
    }
    return _statusHandler
}

export const startMessagesListeningTC = (): ThunkType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ChatReducerActionsType>) => {
        chatApi.start()
        chatApi.subscribe("messages-received", newMessageHandlerCreator(dispatch))
        chatApi.subscribe("status-changed", statusHandlerCreator(dispatch))
    }
export const stopMessagesListeningTC = (): ThunkType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ChatReducerActionsType>) => {
        chatApi.stop()
        chatApi.unsubscribe("messages-received", newMessageHandlerCreator(dispatch))
        chatApi.unsubscribe("status-changed", statusHandlerCreator(dispatch))
        dispatch(cleanMessages())
    }
export const sendMessageChatTC = (message: string): ThunkType =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ChatReducerActionsType>) => {
        chatApi.sendMessage(message)
    }