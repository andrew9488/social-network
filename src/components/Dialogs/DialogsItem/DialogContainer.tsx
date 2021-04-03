import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/dialogsPageReducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogs: Array<DialogType>
}

type MapDispatchToProps = {}

export type DialogPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
    }
}

export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {})(Dialog));

