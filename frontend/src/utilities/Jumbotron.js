import './Jumbotron.css'
import React, { Fragment } from "react";

const Jumbotron = () => {
    return (
        <Fragment>
            <div className="ui raised segment bgColor">
                <p className="lineHeight">
                    <blockquote>
                        “TO BE A FILMMAKER, YOU HAVE TO LEAD. <br/>
                        YOU HAVE TO BE PSYCHOTIC IN YOUR DESIRE TO DO SOMETHING. <br/>
                        PEOPLE ALWAYS LIKE THE EASY ROUTE. YOU HAVE TO PUSH VERY HARD TO GET SOMETHING UNUSUAL, SOMETHING DIFFERENT.”
                    </blockquote>
                    <strong>
                        <pre>
                            - Danny Boyle
                        </pre>
                    </strong>
                </p>

                <p>
                    <blockquote>
                        “IF IT’S A GOOD MOVIE, THE SOUND COULD GO OFF AND THE AUDIENCE WOULD STILL HAVE A PRETTY CLEAR IDEA OF WHAT WAS GOING ON.”
                    </blockquote>
                    <strong>
                        <pre>
                            - Alfred Hitchcock
                        </pre>
                    </strong>
                </p>
            </div>
        </Fragment>
    )
};

export default Jumbotron;