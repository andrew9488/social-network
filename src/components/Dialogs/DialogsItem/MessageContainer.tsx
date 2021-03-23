import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    DialogsPageReducerActionsType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/dialogsPageReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    messages: Array<MessageType>
    newMessageText: string
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export type MessagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
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

export const MessageContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Message);

