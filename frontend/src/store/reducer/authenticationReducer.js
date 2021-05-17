import * as actionTypes from '../action/actionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    loggedInUser: {}
};

const authenticationReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case actionTypes.GET_LOGGED_IN_MEMBER:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: '',
                loggedInUser: action.payload
            }

        case actionTypes.GET_LOGGED_IN_MEMBER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload,
                loggedInUser: {}
            }

        case actionTypes.GET_LOG_OUT_MEMBER:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: '',
                loggedInUser: action.payload
            }

        case actionTypes.GET_LOG_OUT_MEMBER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;
    }
};

export default authenticationReducer;