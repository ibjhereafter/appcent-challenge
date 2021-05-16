import * as actionTypes from '../store/action/actionTypes';
import { getMovieDetailsError, getMovieDetails } from "../store/action/movieDetailsActionCreator";

describe('getMovieDetails and getMovieDetailsError', () => {
    test('checks for GET_MOVIE_DETAILS', () => {
        const payload = {
            movies: {}
        }
        const action = {
            type: actionTypes.GET_MOVIE_DETAILS,
            payload
        };
        const result = getMovieDetails(action);
        expect(result.type).toEqual(actionTypes.GET_MOVIE_DETAILS);
        expect(result.payload).toEqual(action)
    });

    test('checks for GET_MOVIE_DETAILS_ERROR', () => {
            const payload =  {
                error: 'error'
            };

            const action = {
                type: actionTypes.GET_MOVIE_DETAILS_ERROR,
                payload
            };

        const result = getMovieDetailsError(action);
        expect(result.type).toEqual(actionTypes.GET_MOVIE_DETAILS_ERROR);
        expect(result.payload).toEqual(action);
    });
});