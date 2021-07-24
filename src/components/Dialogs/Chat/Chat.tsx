import React from "react";
import {CommonForm} from "../../common/Form/CommonForm";

export const Chat: React.FC = React.memo(() => {
    return (
        <div>
            <h1>common chat</h1>
            <ChatMessages/>
            <CommonForm onSubmit={() => {
            }}/>
        </div>
    );
})

type ChatMessagesPropsType = {}

export const ChatMessages: React.FC<ChatMessagesPropsType> = (props) => {
    return (
        <div>

        </div>
    );
}