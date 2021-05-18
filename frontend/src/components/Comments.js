import './Comments.css';
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { startGetAllComments } from '../store/action/index';
import Error from "../utilities/Error";
import Loader from "../utilities/Loader";

const Comments = (props) => {
    const { loading, error, errorMessage, comments, startGetAllComments, movieId } = props;

    useEffect(() => {

        startGetAllComments(movieId);

    }, [startGetAllComments, movieId]);

    const list = comments.map((comment) => {
        return (
            <Fragment key={comment._id}>
                <div className="item">
                        <div className="content">
                            <div className="header marginBottom">{comment.name}</div>
                            <div className="marginBottom">{comment.comment}</div>
                            <div className="marginBottom">{comment.createdAt.substring(0, 10)}</div>
                        </div>
                </div>
            </Fragment>
        )
    });

    return (
        <Fragment>
            {
                error ? <Error /> : null
            }
            {
                loading ? <Loader /> : (<div className="ui celled list">{list}</div>)
            }
            <h1 className="errorMessage">{errorMessage}</h1>
        </Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        loading: state.comments.loading,
        error: state.comments.loading,
        errorMessage: state.comments.errorMessage,
        comments: state.comments.comments
    }
};

export default connect(mapStateToProps, { startGetAllComments })(Comments);
