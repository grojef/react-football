/**
 * Created by kexiao on 17/1/30.
 */
import * as types  from '../actions/actionTypes'

import zc from '../assets/json/zc.json'


const initialState=[];



export default function matchs(state=initialState,action){
    switch (action.type){
        case types.LOAD_MATCH:
            state
            return zc;
        default:
            return state;
    }
}
