import {ActionType} from "./store";

export type SidebarType = {}

const initialState: SidebarType = {}

const sidebarReducer = (state = initialState, action: ActionType) => {

    return state
}

export default sidebarReducer;