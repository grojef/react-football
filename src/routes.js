import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./containers/App";
import Bet from "./containers/Bet";
import Match from "./containers/Match";
export default <Route path="/" component={App}>
    <IndexRoute component={Match}/>
    <Route path="bet" component={Bet}/>
    <Route path="match" component={Match}/>
</Route>
