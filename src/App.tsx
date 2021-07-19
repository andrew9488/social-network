import React, {ComponentType} from "react";
import style from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {appInitializeTC} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {Routes} from "./components/Routes";


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
                    <Routes/>
                </div>
                <Footer/>
            </div>
        )
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



