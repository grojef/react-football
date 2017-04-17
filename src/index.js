import React from "react";
import {render} from "react-dom";

import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import "./assets/styles/media10px.css";
import "./assets/styles/rem-base.css";
import "./assets/styles/iconfont/iconfont.css";
import "./assets/styles/index.css";
import Root from "./containers/Root";

import configureStore from "./store/configureStore";

// import initReactFastclick from 'react-fastclick';
// initReactFastclick();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(
    <Root store={store} history={history}/>,
    document.getElementById('app')
)


// if(process.env.NODE_ENV !== 'production'){
//     const {whyDidYouUpdate} = require('why-did-you-update')
//     whyDidYouUpdate(React)
// }

