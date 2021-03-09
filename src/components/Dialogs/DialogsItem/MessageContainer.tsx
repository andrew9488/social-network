import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    MessageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/DialogsPageReducer";

type MapStateToPropsType = {
    messages: Array<MessageType>
    newMessageText: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        }

    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

