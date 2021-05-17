import './Forms.css'
import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { startGetLogin } from '../store/action/index';

const Login = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ formError, setFormError ] = useState('');
    const [ showFormError, setShowFormError ] = useState('hidden');

    const { startGetLogin, errorMessage } = props;

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setFormError('Please, check to make sure that the email and password fields are correct.');
            setShowFormError('visible');
        } else {
            const credentials = {
                email,
                password
            };

            startGetLogin(credentials);
        }
    }
     console.log(errorMessage)
    return (
        <Fragment>
            <div className="ui stackable grid container">
                <div className="sixteen wide column">
                    <div className="column">
                        <div className="ui segment segmentWidth container">
                            <h1 className="ui header">LOG IN</h1>
                            <form className="ui form marginBottom" onSubmit={onFormSubmit}>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <input type="email"
                                           onChange={(event => setEmail(event.target.value))}
                                           placeholder="Please, enter your email address here ..."
                                           autoFocus
                                           className="marginBottom"
                                    />

                                    <label className="label">Password</label>
                                    <input type="password"
                                           onChange={(event => setPassword(event.target.value))}
                                           placeholder="Please, enter your password here ..."
                                    />
                                </div>
                                <button type="submit" className="ui button">SIGN IN</button>
                                <p className={`ui red ${showFormError} message header`}>{formError}</p>
                            </form>

                            <p className="ui header">Are you new here ? No problem! <Link to="/users/registration">Join Us</Link></p>
                            <h1 className="registrationError">{errorMessage}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.authentication.errorMessage
    }
}

export default connect(mapStateToProps, { startGetLogin })(Login);