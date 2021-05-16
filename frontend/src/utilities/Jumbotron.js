import './Jumbotron.css'
import React, { Fragment } from "react";

const Jumbotron = () => {
    return (
        <Fragment>
            <div className="ui raised segment bgColor">
                <blockquote className="lineHeight">
                    <i>
                        “To be a film maker, you have to lead. <br/>
                        You have to be psychotic in your desire to do something. <br/>
                        People always like the easy route. You have to push very hard to get something unusual, something different.”
                    </i>

                </blockquote>
                <strong>
                    <cite>
                        - Danny Boyle
                    </cite>
                </strong>

                <blockquote className="lineHeight">
                    <i>
                        “If it's a good movie, the sound could go off and the audience would still have a pretty clear idea of what was going on.”
                    </i>
                </blockquote>
                <strong>
                    <cite>
                        - Alfred Hitchcock
                    </cite>
                </strong>
            </div>
        </Fragment>
    )
};

export default Jumbotron;