export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
type SubscribeType = (message: Array<ChatMessageType>) => void

let subscribers = [] as Array<SubscribeType>

let ws: WebSocket | null = null
const closeWebSocket = () => {
    setTimeout(openWebSocket, 3000)
}

function openWebSocket() {
    ws?.removeEventListener("close", closeWebSocket)
    ws?.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    ws.addEventListener("close", closeWebSocket)
    ws.addEventListener("message", messageHandler)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
}

export const chatApi = {
    start() {
        openWebSocket()
    },
    stop() {
        ws?.removeEventListener("close", closeWebSocket)
        ws?.removeEventListener("message", messageHandler)
        ws?.close()
        subscribers = []
    },
    subscribe(callback: SubscribeType) {
        subscribers.push(callback)
    },
    unsubscribe(callback: SubscribeType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}