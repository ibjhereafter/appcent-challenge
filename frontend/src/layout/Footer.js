import './Footer.css';
import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className="ui grid stackable">
                <div className="ui sixteen column bgColor pushDown">
                    <footer>
                        <div className="centerElement">Copyright &copy; All Rights Reserved - movieNerds 2021</div>
                    </footer>

                </div>
            </div>
        </Fragment>
    )
};

export default Footer;