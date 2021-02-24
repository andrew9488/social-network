import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export const renderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
           <Provider store={store}>
            <App />
           </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(renderEntireTree);
renderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
