import * as actionTypes from '../store/action/actionTypes';
import movieReducer from '../store/reducer/movieReducer';

describe('checks movieReducer', () => {
    const payload = {
        movies: []
    }
    const action = {
        type: actionTypes.GET_MOVIE_LIST,
        payload
    };

    test('processes GET_MOVIE_DETAILS correctly', () => {
        const result = movieReducer(payload, action);
        expect(result.movies).toEqual(action.payload);
    })
})