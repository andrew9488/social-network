import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {
    addPost,
    RootStateType,
    sendMessage, state,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from "./redux/state";
import React from 'react';


const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost.bind(this)}
                 updateNewPostText={updateNewPostText.bind(this)}
                 sendMessage={sendMessage.bind(this)}
                 updateNewMessageText={updateNewMessageText.bind(this)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
