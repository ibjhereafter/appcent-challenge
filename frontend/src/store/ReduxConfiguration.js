import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import rootReducer from './reducer/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);


const ReduxConfiguration = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default ReduxConfiguration;