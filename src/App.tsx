import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

