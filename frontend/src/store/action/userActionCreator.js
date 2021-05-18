import * as actionTypes from './actionTypes';
import axios from "axios";
import history from "../../utilities/history";

import { getLogin } from "./authenticationActionCreator";

const axiosOption = {
    mode: 'cors',
    withCredentials: true
};

const getNewMemberRegistration = (action) => {
    return {
        type: actionTypes.GET_NEW_MEMBER_REGISTRATION,
        payload: action
    }
};

const getNewMemberRegistrationError = (action) => {
    return {
        type: actionTypes.GET_NEW_MEMBER_REGISTRATION_ERROR,
        payload: action
    }
};

export const startGetNewMemberRegistration = (newUser) => {
    return async (dispatch, getState) => {
        try {
            const url = '/users/register';
            const { data } = await axios.post(url, newUser, axiosOption);
            dispatch(getNewMemberRegistration(data));
            dispatch(getLogin(data));
            const loggedInUser = getState().authentication.loggedInUser;
            localStorage.removeItem('loggedInUser');
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            history.push('/');

        } catch (error) {
            if (error.response) {
                dispatch(getNewMemberRegistrationError(error.response.data.error));
            } else {
                dispatch(getNewMemberRegistrationError(error));
            }
        }
    }
};