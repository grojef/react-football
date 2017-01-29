
import * as actionTypes from './actionTypes'

let createActionCreator=(type,...argsName)=>{
    let action ={type};
    return (...args)=>{
        argsName.forEach((v,i)=>{
            action[v] = args[i];
        });
        return action;
    }
}

export const addItem = createActionCreator(actionTypes.ADD_ITEM,'id')

export const loadMatch = createActionCreator(actionTypes.LOAD_MATCH)

export const reset = createActionCreator(actionTypes.RESET)

export const deleteItem =createActionCreator(actionTypes.DELETE_ITEM,'id')



