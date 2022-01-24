import * as actionTypes from './actionsTypes';
//action creator

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};
export const add = (val) => {
    return {
        type: actionTypes.ADD,
        value: val
    }
};
export const sub = (val) => {
    return {
        type: actionTypes.SUB,
        value: val
    }
};
