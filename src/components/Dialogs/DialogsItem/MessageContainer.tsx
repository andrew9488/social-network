import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    DialogsPageReducerActionsType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/DialogsPageReducer";
import {Dispatch} from "redux";

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

const mapDispatchToProps = (dispatch: Dispatch<DialogsPageReducerActionsType>): MapDispatchToPropsType => {
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

