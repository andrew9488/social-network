import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogsPageReducerActionsType, MessageType, sendMessage,} from "../../../redux/dialogsPageReducer";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {ComponentType} from "react";

type MapStatePropsType = {
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    sendMessage: (text: string) => void
}

export type MessagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<DialogsPageReducerActionsType>): MapDispatchPropsType => {
    return {
        sendMessage: (text: string) => {
            dispatch(sendMessage(text))
        },
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Message)
