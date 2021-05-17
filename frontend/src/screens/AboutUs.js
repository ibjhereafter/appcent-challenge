import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <Fragment>
            <div className="ui container">
                <h1>We Love Cinema!</h1>
                <h3>We are a bunch of movie lovers. We find great pleasure in watching, discussing, talking and analysing movies.</h3>
                <h3>Do you love movies ? <div><Link to="/users/registration">Join us</Link></div></h3>
            </div>
        </Fragment>
    );
};

export default AboutUs;