import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";



const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})


export type AppStateType = ReturnType<typeof reducers>



export const store = createStore(reducers);

// @ts-ignore
window.store = store