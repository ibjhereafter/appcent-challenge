import * as actionTypes from '../action/actionTypes';

const INITIAL_DATA = {
    loading: true,
    error: false,
    errorMessage: '',
    totalMovies: 0,
    movies: []
};

const movieReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIE_LIST:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                totalMovies: action.payload.length
            }

        case actionTypes.GET_MOVIE_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload,
                movies: []
            }
        default:
            return state;
    }
};

export default movieReducer;

