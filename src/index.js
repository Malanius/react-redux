import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

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

//Falback to redux own compose if no dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(logger, thunk)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
