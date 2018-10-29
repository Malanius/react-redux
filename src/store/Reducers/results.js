import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedResults = state.results.filter(result => result.id !== action.resultId); //returns new array
    return updateObject(state, { results: updatedResults });
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            //Change data here?
            //concat returns new array, push doesn't
            return updateObject(state, { results: state.results.concat({ id: + new Date(), value: action.result }) });
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default reducer;