import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store