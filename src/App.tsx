import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStoreType} from "./redux/state";

type AppPropsType = {
    store: RootStoreType
    addPost: (postText: string) => void
    updateNewPostText: (newPostText: string) => void
    sendMessage: (messageText: string) => void
    updateNewMessageText: (newMessageText: string) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path={"/profile"} render={() => <Profile
                        stateProfile={props.store._state.profilePage}
                        addPost={props.store.addPost}
                        updateNewPostText={props.store.updateNewPostText}
                    />}/>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        stateDialogs={props.store._state.dialogsPage}
                        sendMessage={props.store.sendMessage}
                        updateNewMessageText={props.store.updateNewMessageText}
                    />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

