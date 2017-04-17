
import * as actionTypes from './actionTypes'
import {browserHistory} from 'react-router'
import {getValidMatches} from '../util/MatchUtil'
let createActionCreator=(type,...argsName)=>{
    let action ={type};
    return (...args)=>{
        argsName.forEach((v,i)=>{
            action[v] = args[i];
        });
        return action;
    }
}

export const addItem = createActionCreator(actionTypes.ADD_ITEM,'id','key')

export const loadMatch = createActionCreator(actionTypes.LOAD_MATCH)

export const reset = createActionCreator(actionTypes.RESET)

export const deleteItem =createActionCreator(actionTypes.DELETE_ITEM,'id')

export const toggleMatch =createActionCreator(actionTypes.TOGGLE_MATCH,'id');

export const initClearItem = createActionCreator(actionTypes.CLEAR_ITEM,'id');

export const clearItem =(id)=>{
    return (dispatch,getState)=>{
        dispatch(initClearItem(id));
        let {matches} = getState();
        let matchCount =getValidMatches(matches).length;
        if(matchCount<1){
            browserHistory.push('/match');
        }
    }
}










