import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/dialogsPageReducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import { ComponentType } from "react";

type MapStatePropsType = {
    dialogs: Array<DialogType>
}

type MapDispatchPropsType = {}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
    }
}


export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {}),
    withAuthRedirect)(Dialog)
