import * as actionTypes from '../store/action/actionTypes';
import movieDetailsReducer from "../store/reducer/movieDetailsReducer";

describe('checks movieDetailsReducer', () => {
    const payload = {
        movieDetails: {}
    };

    const action = {
        type: actionTypes.GET_MOVIE_DETAILS,
        payload
    }

    test('checks GET_MOVIE_DETAILS is processed correctly', () => {
        const result = movieDetailsReducer({}, action);
        expect(result.movieDetails).toEqual(payload);
    })
})