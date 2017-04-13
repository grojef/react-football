/**
 * Created by kexiao on 17/1/30.
 */

import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import matches from "./matches";

const rootReducer = combineReducers({matches, routing})

export default rootReducer



