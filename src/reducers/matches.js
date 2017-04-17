/**
 * Created by kexiao on 17/1/30.
 */
import * as types from "../actions/actionTypes";

import zc from "../assets/json/zc.json";


const initialState = [];

export default function matches(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_MATCH:
            return zc.map(match => ({...match, completed: false, comment: {}}));
        case types.TOGGLE_MATCH:
            return state.map(match => {
                return match.id === action.id ? {...match, completed: !match.completed} : match;
            });
        case types.ADD_ITEM:
            return state.map(match => {
                let comments = match.comment;
                let _cts = {...comments, [action.key]: !comments[action.key]}
                return match.id === action.id ? {...match, comment: _cts} : match;
            });
        case types.CLEAR_ITEM:
            return state.map(match => {
                return match.id === action.id ? {...match, comment: {}} : match;
            })
        case types.RESET:
            return state.map(match => {
                return {...match, comment: {}};
            })
        default:
            return state;
    }
}
