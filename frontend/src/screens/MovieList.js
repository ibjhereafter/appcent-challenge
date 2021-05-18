import './MovieList.css';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Error from '../utilities/Error';
import Loader from '../utilities/Loader';
import PaginationButtons from '../utilities/PaginationButtons';
import Jumbotron from "../utilities/Jumbotron";
import { startGetMovieList } from '../store/action/index';
import history from '../utilities/history';

const MovieList = (props) => {
    document.title = 'Popular Movies | movieNerds';
    const [numberOfMoviesPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const { loading, error, movies, startGetMovieList } = props;

    useEffect(() => {

        startGetMovieList();

    }, [startGetMovieList]);

    const startIndex = ((currentPage - 1) * numberOfMoviesPerPage );
    const currentList = movies.slice(startIndex, startIndex + numberOfMoviesPerPage);

    const onPageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const gotToMovieDetails = (movieId) => {
        if (movieId) {
            history.push(`/movies/${movieId}/details`);
        }
    };

    const movieList = currentList.map((movie) => {
        return(
            <Fragment key={movie.id}>
                <div className="card">
                    <div className="image" onClick={() => gotToMovieDetails(movie.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.overview}/>
                    </div>

                    <div className="marginLeft">
                        <Link to={`/movies/${movie.id}/details`}>
                            <div className="ui header">{movie.title}</div>
                        </Link>

                        <div className="marginBottom">{movie.release_date}</div>

                        <div>
                            <i className="star icon yellow"></i>
                            {movie.vote_average}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    });


    return (
        <Fragment>
            <div className="ui grid container">
                <div className="ui sixteen column">
                    <Jumbotron />
                    {
                        error ? <Error /> : (<h1 className="ui header">POPULAR MOVIES</h1>)
                    }
                    {
                        loading ? <Loader /> : (<div className="ui five stackable cards">{movieList}</div>)
                    }
                    {
                        movies.length > 15 ? (<div className="marginTop"><PaginationButtons onPageClick={onPageClick} /></div>) : null
                    }

                </div>
            </div>

        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading,
        error: state.movies.error,
        movies: state.movies.movies
    }
};

export default connect(mapStateToProps, { startGetMovieList })(MovieList);