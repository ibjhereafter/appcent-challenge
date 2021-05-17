import './Forms.css'
import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <Fragment>
            <div className="ui stackable grid container">
                <div className="sixteen wide column">
                    <div className="column">
                        <div className="ui segment segmentWidth container">
                            <h1 className="ui header">LOG IN</h1>
                            <form className="ui form marginBottom">
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
                                <button className="ui button">SIGN IN</button>
                            </form>

                            <p className="ui header">Are you new here ? No problem! <Link to="/users/registration">Join Us</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

};

export default Login;