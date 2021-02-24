import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state:AppStateType)=>{
    return {
        dialogs: state.dialogsPage.dialogs
    }
}


export const DialogContainer = connect(mapStateToProps)(Dialog)

