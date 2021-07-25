import React, {useCallback, useEffect, useRef, useState} from "react";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";
import style from "./Chat.module.css"
import {useDispatch} from "react-redux";
import {reset} from "redux-form";

type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type StatusType = "pending" | "ready"

export const Chat: React.FC = React.memo(() => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    const [messages, setMessages] = useState<Array<ChatMessageType>>([])
    const [status, setStatus] = useState<StatusType>("pending")
    const messagesEndRef = useRef<null | HTMLDivElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let ws: WebSocket
        const closeWebSocket = () => {
            setTimeout(openWebSocket, 3000)
        }

        function openWebSocket() {
            ws?.removeEventListener("close", closeWebSocket)
            ws?.close()
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            ws.addEventListener("close", closeWebSocket)
            setWsChannel(ws)
        }

        openWebSocket()
        return () => {
            ws.removeEventListener("close", closeWebSocket)
            ws.close()
        }
    }, [])

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevState => [...prevState, ...newMessages]))
        }
        wsChannel?.addEventListener("message", messageHandler)
        return () => {
            wsChannel?.removeEventListener("message", messageHandler)
        }
    }, [wsChannel])

    useEffect(() => {
        const statusHandler = () => {
            setStatus("ready")
        }
        wsChannel?.addEventListener("open", statusHandler)
        return () => {
            wsChannel?.removeEventListener("open", statusHandler)
        }
    }, [wsChannel])

    const sendChatMessage = useCallback((text: CommonFormPropsType) => {
        wsChannel?.send(text.newText)
        dispatch(reset("formForSendNewText"))
    }, [wsChannel])


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages])


    return (
        <div className={style.chatContainer}>
            <div className={style.chatBlock}>
                {messages.map((mes, index) => {
                    return <ChatMessages key={index + mes.userId} message={mes}/>
                })}
                <div ref={messagesEndRef}/>
            </div>
            <CommonForm disable={wsChannel === null || status !== "ready"} onSubmit={sendChatMessage}/>
        </div>
    );
})

const ChatMessages: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <img src={message.photo} alt="userPhoto" style={{width: "30px"}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
}