import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

