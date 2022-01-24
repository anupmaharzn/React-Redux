import * as actionTypes from './actionsTypes';
//sync action create
export const saveResult = (res) => {

    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
};
//async action create
export const storeResult = (res) => {
    //possibel due to redux-thunk
    return function (dispatch, getState) {
        setTimeout(() => {
            const oldcounter = getState().ctr.counter;
            console.log(oldcounter);
            dispatch(saveResult(res))
        }, 2000);
    }
    //halka async jasto banako 

};
export const deleteResult = (reElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: reElId

    }
};