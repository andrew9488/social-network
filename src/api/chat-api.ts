export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType = "pending" | "ready" | "error"
type MessagesSubscribeType = (message: Array<ChatMessageType>) => void
type StatusSubscribeType = (status: StatusType) => void
type EventNameType = "messages-received" | "status-changed"

type SubscribersType = {
    [key in EventNameType]: Array<MessagesSubscribeType & StatusSubscribeType>
}

let subscribers: SubscribersType = {
    "messages-received": [],
    "status-changed": []
}

let ws: WebSocket | null = null
const closeHandler = () => {
    notifySubscribersAboutStatus("pending")
    setTimeout(openWebSocket, 3000)
}

const cleanUpListener = () => {
    ws?.removeEventListener("close", closeHandler)
    ws?.removeEventListener("message", messageHandler)
    ws?.removeEventListener("open", openHandler)
    ws?.removeEventListener("error", errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => subscribers["status-changed"].forEach(s => s(status))

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers["messages-received"].forEach(s => s(newMessages))
}
const openHandler = () => notifySubscribersAboutStatus("ready")
const errorHandler = () => notifySubscribersAboutStatus("error")

const openWebSocket = () => {
    cleanUpListener()
    ws?.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    notifySubscribersAboutStatus("pending")
    ws.addEventListener("close", closeHandler)
    ws.addEventListener("message", messageHandler)
    ws.addEventListener("open", openHandler)
    ws.addEventListener("error", errorHandler)
}

export const  chatApi = {
    start() {
        openWebSocket()
    },
    stop() {
        ws?.close()
        subscribers["messages-received"] = []
        subscribers["status-changed"] = []
        cleanUpListener()
    },
    subscribe(eventName: EventNameType, callback: MessagesSubscribeType | StatusSubscribeType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    unsubscribe(eventName: EventNameType, callback: MessagesSubscribeType | StatusSubscribeType) {
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}