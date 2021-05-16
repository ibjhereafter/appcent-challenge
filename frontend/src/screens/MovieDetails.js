import './movieDetails.css';
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import Loader from "../utilities/Loader";
import Error from "../utilities/Error";
import { startGetMovieDetails } from '../store/action/index';


const MovieDetails = (props) => {
    const { startGetMovieDetails, movieDetails, loading, error, match } = props;

    useEffect(() => {

        if (match.params.id) {

            startGetMovieDetails(match.params.id);
        }
    }, [startGetMovieDetails, match.params.id]);

    return (
        <Fragment>
            {
                error ? <Error /> : null
            }
            {
                loading ? <Loader /> : (
                    <Fragment>
                        <div className="ui stackable grid container">
                            <div className="eight wide column row stackable">
                                <div className="column">
                                    <div className="image">
                                        <img width="350" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.overview}/>
                                    </div>
                                </div>
                            </div>

                            <div className="eight wide column row stackable">
                                <div className="column">
                                    <h1 className="ui header">{movieDetails.title} <span>({movieDetails.release_date.substring(0, 4)})</span></h1>
                                    {
                                        movieDetails.genres.map((genre) => {
                                            return (
                                                <Fragment key={genre.id}>
                                                    <span className="fontWeight"> {`${genre.name} |`}</span>
                                                </Fragment>
                                            )
                                        })
                                    }
                                    <div className="ui divider"></div>
                                    <div className="lineHeight fontWeight">{movieDetails.overview}</div>
                                    <div className="ui header">
                                        <div className="ui divider"></div>
                                        <div>Runtime: {movieDetails.runtime} mins.</div>
                                        <div className="ui divider"></div>
                                        <div>Release Date: {movieDetails.release_date}</div>
                                        <div className="ui divider"></div>
                                        <div>Average Rating:
                                            <i className="star icon yellow"></i>
                                            {movieDetails.vote_average}
                                        </div>
                                        <div className="ui divider"></div>
                                        {
                                            movieDetails.homepage ? (
                                                <Fragment>
                                                    <a href={movieDetails.homepage}>Website: {movieDetails.homepage}</a>
                                                    <div className="ui divider"></div>
                                                </Fragment>

                                            ) : null
                                        }

                                    </div>
                                    <h1 className="ui header">movieNerds Members Reviews</h1>
                                    <div className="ui divider"></div>
                                    <button type='button' className="ui blue button">ADD COMMNENT</button>

                                </div>

                            </div>

                        </div>
                    </Fragment>

                )
            }
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.movieDetails.loading,
        error: state.movieDetails.error,
        movieDetails:state.movieDetails.movieDetails
    }
};

export default connect(mapStateToProps, { startGetMovieDetails })(MovieDetails);