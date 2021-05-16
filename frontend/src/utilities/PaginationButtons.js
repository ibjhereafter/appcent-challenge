import './PaginationButtons.css';
import React, {Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

const PaginationButtons = (props) => {
    const [numberOfMoviesPerPage] = useState(12);
    const [totalPages, setTotalPages] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState([]);
    const { totalMovies, onPageClick } = props;


    useEffect(() => {
        if (totalMovies > 0) {
            setTotalPages(Math.ceil(totalMovies / numberOfMoviesPerPage));
        }
        const totalButtons = [ ...Array(totalPages).keys()];
        setNumberOfButtons([...totalButtons]);

    }, [totalMovies, numberOfMoviesPerPage, totalPages]);

    const buttons = numberOfButtons.map((button) => {
        return button + 1
    });

    const pages = buttons.map((page) => {
        return (
            <button
                className="ui grey button"
                autoFocus={ page ? page === 1 : null}
                onClick={() => onPageClick(page)}
                key={page}>{page}
            </button>
        );
    });


    return (
        <Fragment>
            <div style={{marginTop: '20px'}} className="ui container centerElement">{pages}</div>
        </Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        totalMovies: state.movies.totalMovies,
        movies: state.movies.movies,
    }
}

export default connect(mapStateToProps)(PaginationButtons);