import './Header.css';
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import history from "../utilities/history";

const Header = (props) => {
    const { loggedInUser } = props;

    const userName = () => {
        if (loggedInUser.name) {
            return (
                <Fragment>
                    <strong>Hello</strong> { loggedInUser.name.toUpperCase() }
                </Fragment>
            )
        } else {
            return null;
        }
    };

    const goToLogIn = () => {
        history.push('/users/login');
    }

    const goToAboutUs = () => {
        history.push('/aboutus');
    }

    const logOut = () => {
        history.push('/users/logout');
    }

    const signedInOrLogOut = () => {
        if (loggedInUser.name) {
            return (
                <Fragment>
                    <button onClick={logOut} type="button" className="ui button">LOG OUT</button>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <button onClick={goToLogIn} type="button" className="ui button">
                        <i className="user icon" />
                        LOG IN
                    </button>
                </Fragment>
            )
        }
    };

    const aboutUs = () => {
        return (
            <Fragment>
                <button onClick={goToAboutUs} type="button" className="ui button">ABOUT US</button>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="ui stackable grid">
                <div className="ui sixteen column stackable">
                    <header>

                        <div className="ui backgroundColor secondary pointing menu stackable">
                            <div className="ui container">

                                <div className="left menu">
                                    <Link to="/">
                                        <div className="active item">movieNerds</div>
                                    </Link>
                                </div>

                                <div className="ui three item menu stackable">
                                    <div className="right menu">
                                        <div className="item menuWidth">
                                            <div>{userName()}</div>
                                        </div>

                                        <div className="item menuWidth">
                                            {aboutUs()}
                                        </div>

                                        <div className="item">
                                            {signedInOrLogOut()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.authentication.loggedInUser
    }
}

export default connect(mapStateToProps)(Header);