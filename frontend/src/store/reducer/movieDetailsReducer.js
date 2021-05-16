import * as actionTypes from '../action/actionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    movieDetails: {}
};

const movieDetailsReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {

        case actionTypes.GET_MOVIE_DETAILS:
            return {
                loading: false,
                error: false,
                errorMessage: '',
                movieDetails: action.payload
            }

        case actionTypes.GET_MOVIE_DETAILS_ERROR:
            return {
                loading: false,
                error: false,
                errorMessage: action.payload,
                movieDetails: {}
            }

        default:
            return state;
    }
};

export default movieDetailsReducer;