export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType = "pending" | "ready" | "error"
type MessagesSubscribeType = (message: Array<ChatMessageType>) => void
type StatusSubscribeType = (status: StatusType) => void
type EventNameType = "message-received" | "status-changed"

let subscribers = {
    "message-received": [] as Array<MessagesSubscribeType>,
    "status-changed": [] as Array<StatusSubscribeType>
}

let ws: WebSocket | null = null
const closeWebSocket = () => {
    notifySubscribersAboutStatus("pending")
    setTimeout(openWebSocket, 3000)
}

const cleanUpListener = () => {
    ws?.removeEventListener("close", closeWebSocket)
    ws?.removeEventListener("message", messageHandler)
    ws?.removeEventListener("open", openHandler)
    ws?.removeEventListener("error", errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => subscribers["status-changed"].forEach(s => s(status))

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers["message-received"].forEach(s => s(newMessages))
}
const openHandler = () => notifySubscribersAboutStatus("ready")
const errorHandler = () => notifySubscribersAboutStatus("error")

const openWebSocket = () => {
    cleanUpListener()
    ws?.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    notifySubscribersAboutStatus("pending")
    ws.addEventListener("close", closeWebSocket)
    ws.addEventListener("message", messageHandler)
    ws.addEventListener("open", openHandler)
    ws.addEventListener("error", errorHandler)
}

export const chatApi = {
    start() {
        openWebSocket()
    },
    stop() {
        cleanUpListener()
        ws?.close()
        subscribers["message-received"] = []
        subscribers["status-changed"] = []
    },
    subscribe(eventName: EventNameType, callback: MessagesSubscribeType | StatusSubscribeType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        // @ts-ignore
        return () => subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    unsubscribe(eventName: EventNameType, callback: MessagesSubscribeType | StatusSubscribeType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}