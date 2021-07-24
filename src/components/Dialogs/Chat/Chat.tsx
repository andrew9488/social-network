import React, {useCallback, useEffect, useState} from "react";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";
import style from "./Chat.module.css"


type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const wsChat = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

export const Chat: React.FC = React.memo(() => {
    debugger

    const [messages, setMessages] = useState<Array<ChatMessageType>>([])
    useEffect(() => {
        wsChat.addEventListener("message", (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevState => [...prevState, ...newMessages]))
        })
    }, [])

    const sendChatMessage = useCallback((text: CommonFormPropsType) => {
        wsChat.send(text.newText)
    }, [])

    return (
        <div className={style.chatContainer}>
            <div className={style.chatBlock}>
                {messages.map((mes, index) => {
                    return <ChatMessages key={index + mes.userId} message={mes}/>
                })}
            </div>
            <CommonForm onSubmit={sendChatMessage}/>
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