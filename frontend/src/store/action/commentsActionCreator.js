import * as actionTypes from './actionTypes';
import axios from "axios";
import history from "../../utilities/history";

const axiosOption = {
    mode: 'cors',
    withCredentials: true
};

const getAllComments = (action) => {
    return {
        type: actionTypes.GET_ALL_COMMENTS,
        payload: action
    }
};

const getAllCommentsError = (action) => {
    return {
        type: actionTypes.GET_ALL_COMMENTS_ERROR,
        payload: action
    }
}

export const startGetAllComments = (movieId) => {
    return async (dispatch) => {
        try {
            const url = `/comments?movieId=${movieId}`;
            const { data } = await axios.get(url, axiosOption);
            dispatch(getAllComments(data));

        } catch (error) {
            if (error.response) {
                dispatch(getAllCommentsError(error.response.data.error));
            } else {
                dispatch(getAllCommentsError(error));
            }
        }
    }
};


const getAddCommentError = (action) => {
    return {
        type: actionTypes.GET_CREATE_COMMENT_ERROR,
        payload: action
    }
};

export const clearAddCommentErrorMessage = () => {
    return {
        type:actionTypes.CLEAR_ADD_COMMENT_ERROR_MESSAGE,
        payload: ''
    }
};

export const startGetAddComment = (newComment, movieId) => {
    return async (dispatch) => {
        try {
            const url = '/comments/create';
            await axios.post(url, newComment, axiosOption);
            history.push(`/movies/${movieId}/details`);

        } catch (error) {
            if (error.response.status === 401) {
                localStorage.removeItem('loggedInUser');
                history.push('/users/login');
            } else {
                dispatch(getAddCommentError(error.response.data.error));
            }

        }
    }
}