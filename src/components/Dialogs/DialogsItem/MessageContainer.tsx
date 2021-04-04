import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    DialogsPageReducerActionsType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/dialogsPageReducer";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {ComponentType} from "react";

type MapStatePropsType = {
    messages: Array<MessageType>
    newMessageText: string
}

type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export type MessagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<DialogsPageReducerActionsType>): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        }

    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Message)
