import React from "react";
import {Route, Switch} from "react-router-dom";
import {withSuspense} from "../../hoc/withSuspense";
import ProfileContainer from "../Profile/ProfileContainer";

const Dialogs = React.lazy(() => import("../Dialogs/Dialogs"))
const UsersContainer = React.lazy(() => import("../Users/UsersContainer"))
const LoginContainer = React.lazy(() => import("../Login/LoginContainer"))

export const PATH = {
    LOGIN: "/",
    PROFILE: "/profile",
    USERS: "/users",
    DIALOGS: "/dialogs",
    NEWS: "/news",
    MUSIC: "/music",
    SETTINGS: "/settings"
}

export const Routes: React.FC = React.memo(() => {
    return (
        <Switch>
            <Route exact path={PATH.LOGIN} component={withSuspense(LoginContainer)}/>
            <Route path={`${PATH.PROFILE}/:userId?`} render={() => <ProfileContainer/>}/>
            <Route path={PATH.USERS} component={withSuspense(UsersContainer)}/>
            <Route path={PATH.DIALOGS} component={withSuspense(Dialogs)}/>
        </Switch>
    )
})