// import 'core-js';

/* polyfills.js */
import 'babel-polyfill'
import 'react-app-polyfill/ie11'
import 'core-js'

import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducer';

import './scss/index.scss'

const store = createStore(Reducer);
store.subscribe(function(){
    console.log('có thay đổi trong Redux!!')
    console.log(store.getState());
});
if (typeof (Storage) !== 'undefined') {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById("CHAT_ELEMENT"));
}else{
    alert("このブラウザでは、アプリケーションは正常に動作しません。 アップグレードしてください")
}
