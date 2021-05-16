import React from "react";
import { getMovieDetails, getMovieDetailsError } from "../store/action/movieDetailsActionCreator";
import * as actionTypes from '../store/action/actionTypes';

describe('getMovieDetails', () => {
    const movie = {
        type: actionTypes.GET_MOVIE_DETAILS,
        payload: [{}]
    };
    test('checks for type GET_MOVIE_DETAILS', () => {
        const result = getMovieDetails(movie);
        expect(result.type).toEqual(actionTypes.GET_MOVIE_DETAILS);
        expect(result.payload).toEqual(movie)
    })
});

describe('getMovieDetailsError', () => {
    const error = {
        type: actionTypes.GET_MOVIE_DETAILS_ERROR,
        payload: 'Error'
    };

    test('checks for type GET_MOVIE_DETAILS_ERROR', () => {
        const result = getMovieDetailsError(error);
        expect(result.type).toEqual(actionTypes.GET_MOVIE_DETAILS_ERROR);
        expect(result.payload).toEqual(error);
    });
})