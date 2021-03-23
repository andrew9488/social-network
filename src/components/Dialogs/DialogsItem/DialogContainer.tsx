import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/dialogsPageReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogs: Array<DialogType>
}

type MapDispatchToProps = {}

export type DialogPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {}
}


export const DialogContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialog)

