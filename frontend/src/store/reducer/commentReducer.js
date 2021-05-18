import * as actionTypes from '../action/actionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    addCommentErrorMessage: '',
    comments: []
};

const commentReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_COMMENTS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: '',
                comments: action.payload
            }

        case actionTypes.GET_ALL_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload,
                comments: []
            }

        case actionTypes.GET_CREATE_COMMENT_ERROR:
            return {
                ...state,
                addCommentErrorMessage: action.payload
            }

        case actionTypes.CLEAR_ADD_COMMENT_ERROR_MESSAGE:
            return {
                ...state,
                addCommentErrorMessage: action.payload
            }

        default:
            return state;
    }
};

export default commentReducer;