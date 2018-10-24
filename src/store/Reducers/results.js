import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: + new Date(), value: action.result }) //concat returns new array, push doesn't
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newResults = [...state.results]; //not a deep copy but ok for element removal
            // newResults.splice(id, 1);
            const updatedResults = state.results.filter(result => result.id !== action.resultId); //returns new array
            return {
                ...state,
                results: updatedResults
            }
        default:
            return state;
    }
}

export default reducer;