import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { startGetLogOutMember } from '../store/action';


const LogOut = (props) => {
    const { startGetLogOutMember } = props;

    useEffect(() => {
        startGetLogOutMember();

    }, [startGetLogOutMember]);

    return (<Fragment>{}</Fragment>);
};

export default connect(null, { startGetLogOutMember })(LogOut);
