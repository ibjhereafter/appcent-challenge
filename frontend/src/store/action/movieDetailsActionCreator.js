import axios from "axios";
import * as actionTypes from './actionTypes';

export const getMovieDetails = (action) => {
    return {
        type: actionTypes.GET_MOVIE_DETAILS,
        payload: action
    }
};

export const getMovieDetailsError = (action) => {
    return {
        type: actionTypes.GET_MOVIE_DETAILS_ERROR,
        payload: action
    }
};

export const startGetMovieDetails = (movieId) => {
    return async (dispatch) => {
        try {
            const apiKeyUrl = '/moviedb/key';
            const { data } = await axios.get(apiKeyUrl);

            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${data.key}&language=en-US`;
            const { data: movie } = await axios.get(url);
            dispatch(getMovieDetails(movie));

        } catch (error) {
            if (error.response) {
                dispatch(getMovieDetailsError(error.response.data.error));
            } else {
                dispatch(getMovieDetailsError(error));
            }
        }
    }
};

