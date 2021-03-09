import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/DialogsPageReducer";

type MapStateToPropsType = {
    dialogs: Array<DialogType>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

type MapDispatchToProps = {}

const mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
    return {}
}


export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

