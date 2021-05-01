import React, {ComponentType} from "react";
import style from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {appInitializeTC} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))

type MapStatePropsType = {
    isInitialization: boolean
}

type MapDispatchPropsType = {
    appInitializeTC: () => void
}

type AppPropsType = {
    appInitializeTC: () => void
    isInitialization: boolean
}

class App extends React.PureComponent<AppPropsType> {

    componentDidMount() {
        this.props.appInitializeTC()
    }

    render() {

        if (!this.props.isInitialization) {
            return <Preloader/>
        }

        return (
            <div className={style.app}>
                <HeaderContainer/>
                <Navbar/>
                <div className={style.content}>
                    <Switch>
                        <Route exact path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/login" component={withSuspense(LoginContainer)}/>
                        <Route path="/users" component={withSuspense(UsersContainer)}/>
                        <Route path="/dialogs" component={withSuspense(Dialogs)}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isInitialization: state.app.isInitialization,
    }
}


export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        {appInitializeTC}), withRouter)(App)



