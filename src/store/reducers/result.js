import * as actionTypes from '../actions/actionsTypes';
const initialState = {

    results: []
}
const deleteResult = (state, action) => {
    //delete elements immutabily coz filter create brand new array 
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return {
        ...state,
        results: updatedArray

    }

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);

    }
    return state;
};

export default reducer;