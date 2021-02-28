import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/DialogsPageReducer";

const mapStateToProps = (state: AppStateType)=> {
    return{
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: any)=>{
    return{
        sendMessage: () =>{
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (newText: string)=>{
            dispatch(updateNewMessageTextActionCreator(newText))
        }

    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

