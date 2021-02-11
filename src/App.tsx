import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: any) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path={"/profile"} render={() => <Profile
                        stateProfile={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        stateDialogs={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

