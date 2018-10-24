const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter }) //concat returns new array, push doesn't
            }
        case 'DELETE_RESULT':
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