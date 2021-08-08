import React, {useCallback, useEffect, useRef, useState} from "react";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";
import style from "./Chat.module.css"
import {useDispatch, useSelector} from "react-redux";
import {reset} from "redux-form";
import {ChatMessageType, StatusType} from "../../../api/chat-api";
import {AppStateType} from "../../../redux/redux-store";
import {sendMessageChatTC, startMessagesListeningTC, stopMessagesListeningTC} from "../../../redux/chatReducer";

export const Chat: React.FC = React.memo(() => {

    const messages = useSelector<AppStateType, Array<ChatMessageType>>(state => state.chat.messages)
    const status = useSelector<AppStateType, StatusType>(state => state.chat.status)
    const messagesEndRef = useRef<null | HTMLDivElement>(null)
    const dispatch = useDispatch()

    const [isAutoScroll, setIsAutoScroll] = useState(true)

    useEffect(() => {
        dispatch(startMessagesListeningTC())
        return () => {
            dispatch(stopMessagesListeningTC())
        }
    }, [])

    useEffect(() => {
        if (isAutoScroll) {
            messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])


    const sendChatMessage = useCallback((text: CommonFormPropsType) => {
        dispatch(sendMessageChatTC(text.newText))
        dispatch(reset("formForSendNewText"))
    }, [])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.currentTarget
        if ((Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight) < 10) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    return (
        <div className={style.chatContainer}>
            <div className={style.chatBlock} onScroll={scrollHandler}>
                {messages.map((mes, index) => {
                    return <ChatMessages key={index + mes.userId} message={mes}/>
                })}
                <div ref={messagesEndRef}/>
            </div>
            {status === "error" && <span style={{color: "red"}}>some error</span>}
            <CommonForm disable={status !== "ready"} onSubmit={sendChatMessage}/>
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