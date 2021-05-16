import axios from "axios";
import * as actionTypes from './actionTypes';

const getMovieList = (action) => {
    return {
        type: actionTypes.GET_MOVIE_LIST,
        payload: action
    }
};

const getMovieListError = (action) => {
    return {
        type: actionTypes.GET_MOVIE_LIST_ERROR,
        payload: action
    }
}

export const startGetMovieList = () => {
    return async (dispatch) => {
        try {
            const apiKeyUrl = '/moviedb/key';
            const { data } = await axios.get(apiKeyUrl);

            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${data.key}&language=en-US&page=1`;
            const { data: movies } = await axios.get(url);
            dispatch(getMovieList(movies.results));

        } catch (error) {
            if (error.response) {
                dispatch(getMovieListError(error.response.data.error));
            } else {
                dispatch(getMovieListError(error));
            }

        }
    }
};
