import * as actionTypes from '../action/actionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    newUser: {}
};

const userReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case actionTypes.GET_NEW_MEMBER_REGISTRATION:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: '',
                newUser: action.payload
            }

        case actionTypes.GET_NEW_MEMBER_REGISTRATION_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload,
                newUser: {}
            }
        default:
            return state;
    }
};

export default userReducer;