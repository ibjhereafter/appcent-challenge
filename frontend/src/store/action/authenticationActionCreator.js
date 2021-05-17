import * as actionTypes from './actionTypes';
import axios from "axios";
import history from "../../utilities/history";

const axiosOption = {
    mode: 'cors',
    withCredentials: true
};

const getLogin = (action) => {
    return {
        type: actionTypes.GET_LOGGED_IN_MEMBER,
        payload: action
    }
};

const getLoginError = (action) => {
    return {
        type: actionTypes.GET_LOGGED_IN_MEMBER_ERROR,
        payload: action
    }
}

export const startGetLogin = (credentials) => {
    return async (dispatch, getState) => {
        try {
            const url = '/users/login';
            const { data } = await axios.post(url, credentials, axiosOption);
            dispatch(getLogin(data));
            const loggedInUser = getState().authentication.loggedInUser;
            localStorage.removeItem('loggedInUser');
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            history.push('/');

        } catch (error) {
            if (error.response) {
                dispatch(getLoginError(error.response.data.error))
            } else {
                dispatch(getLoginError(error));
            }
        }
    }
};

const getLogOutMemberError = (action) => {
    return {
        type: actionTypes.GET_LOG_OUT_MEMBER_ERROR,
        payload: action
    }
};

const getLogOutMember = (action) => {
    return {
        type: actionTypes.GET_LOG_OUT_MEMBER,
        payload: action
    }
};

export const startGetLogOutMember = () => {
    return async (dispatch) => {
        try {
            const url = '/users/logout';
            await axios.post(url, {}, axiosOption);
            localStorage.removeItem('loggedInUser');
            dispatch(getLogOutMember({}));
            history.push('/users/login');

        } catch (error) {
            if (error.response.status === 401 || error.response.status === 400) {
                localStorage.removeItem('loggedInUser');
                history.push('/users/login');
            } else {
                dispatch(getLogOutMemberError(error.response.data.error));
            }

        }
    }
}