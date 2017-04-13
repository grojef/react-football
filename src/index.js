import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import reducer from "./reducers";
import "./assets/styles/media10px.css";
import "./assets/styles/rem-base.css";
import "./assets/styles/iconfont/iconfont.css";
import "./assets/styles/index.css";
import Root from "./containers/Root";
const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store);
render(
    <Root store={store} history={history}/>,
    document.getElementById('app')
)
