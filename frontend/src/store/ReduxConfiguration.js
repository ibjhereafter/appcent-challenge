import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import rootReducer from './reducer/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getLoggedInUserFromLocalStorage = () => {
    let loggedInUser = {};
    const user = localStorage.getItem('loggedInUser');

    if (user) {
        const currentUser = JSON.parse(user);
        loggedInUser = { ...currentUser };
        return loggedInUser;
    } else {
        return loggedInUser;
    }
}

const LoggedInUser = {
    loading: true,
    error: false,
    errorMessage: '',
    loggedInUser: getLoggedInUserFromLocalStorage()
};

const initilState = {
    authentication: LoggedInUser
}


const store = createStore(
    rootReducer,
    initilState,
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