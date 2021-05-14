import './Header.css';
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <div className="ui stackable grid">
                <div className="ui sixteen column stackable">
                        <div className="ui backgroundColor secondary pointing menu stackable">
                            <div className="ui container">

                                <div className="left menu">
                                    <Link to="/">
                                        <div className="active item">movieNerds</div>
                                    </Link>
                                </div>

                                <div className="ui two item menu stackable">
                                    <div>
                                        <Link to="/about">
                                            <div className="item menuWidth">ABOUT US</div>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link to="/users/login">
                                            <div className="item">LOGIN</div>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;