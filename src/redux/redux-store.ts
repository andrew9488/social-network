import {combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfilePageReducer";
import dialogsPageReducer from "./DialogsPageReducer";
import sidebarReducer from "./SidebarReducer";
import usersPageReducer from "./UsersPageReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer
})


export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers);
