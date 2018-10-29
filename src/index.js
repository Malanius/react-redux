import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/Reducers/counter';
import resultsReducer from './store/Reducers/results';

const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultsReducer
})

//Logging middleware
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware]: Dispatching', action);
            const result = next(action); //This passes action to the reducer
            console.log('[Middleware]: Next state -', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
