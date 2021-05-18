import './AddComment.css';
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import { startGetAddComment, clearAddCommentErrorMessage } from '../store/action/index';
import history from "../utilities/history";


const AddComment = (props) => {
    const [ comment, setComment ] = useState('');
    const { errorMessage, startGetAddComment, clearAddCommentErrorMessage, loggedInUser } = props;



    useEffect(() => {
        clearAddCommentErrorMessage();

        if (!loggedInUser.name) {
            history.push('/users/login');
        }
    },[loggedInUser, clearAddCommentErrorMessage]);

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (comment && props.match.params.id) {
            const newComment = {
                movieId: props.match.params.id,
                comment
            };
            startGetAddComment(newComment, props.match.params.id);
        }
    };

    return (
        <Fragment>
            <div className="ui stackable grid container">
                <div className="sixteen wide column">
                    <div className="column">
                        <div className="ui segment segmentWidth container">
                            <h1 className="ui header">WRITE COMMENT</h1>
                            <form className="ui form" onSubmit={onFormSubmit}>
                                <div className="field">
                                    <label className="label">Comment</label>
                                    <textarea required autoFocus onChange={(event => setComment(event.target.value))}>{}</textarea>
                                </div>
                                <button type="submit" className="ui button">SUBMIT COMMENT</button>
                            </form>
                        </div>
                        <h1 className="errorMessage ui segmentWidth container">{errorMessage}</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.comments.addCommentErrorMessage,
        loggedInUser: state.authentication.loggedInUser
    }
}

export default connect(mapStateToProps, { startGetAddComment, clearAddCommentErrorMessage })(AddComment);
