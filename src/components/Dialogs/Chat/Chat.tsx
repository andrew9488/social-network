import React, {useCallback, useEffect, useRef} from "react";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";
import style from "./Chat.module.css"
import {useDispatch, useSelector} from "react-redux";
import {reset} from "redux-form";
import {ChatMessageType} from "../../../api/chat-api";
import {AppStateType} from "../../../redux/redux-store";
import {sendMessageChatTC, startMessagesListeningTC, stopMessagesListeningTC} from "../../../redux/chatReducer";

type StatusType = "pending" | "ready"

export const Chat: React.FC = React.memo(() => {

    const messages = useSelector<AppStateType, Array<ChatMessageType>>(state => state.chat.messages)
    // const [status, setStatus] = useState<StatusType>("pending")
    const messagesEndRef = useRef<null | HTMLDivElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListeningTC())
        return () => {
            dispatch(stopMessagesListeningTC())
        }
    }, [])
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages])


    const sendChatMessage = useCallback((text: CommonFormPropsType) => {
        dispatch(sendMessageChatTC(text.newText))
        dispatch(reset("formForSendNewText"))
    }, [])

    return (
        <div className={style.chatContainer}>
            <div className={style.chatBlock}>
                {messages.map((mes, index) => {
                    return <ChatMessages key={index + mes.userId} message={mes}/>
                })}
                <div ref={messagesEndRef}/>
            </div>
            <CommonForm disable={false} onSubmit={sendChatMessage}/>
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