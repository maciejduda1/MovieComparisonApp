import React from 'react';
import placeholdMovie from '../images/cinema-dark-display-8158.jpg'

const MovieRight = (props) => (
    <div className='movie-small'>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt='movie poster'></img>
    </div>
);

export default MovieRight;
