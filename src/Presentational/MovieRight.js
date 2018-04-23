import React from 'react';

const MovieRight = (props) => (
    <div className='movie-small'>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt='http://via.placeholder.com/50x50'></img>
        <h2 className='movie-title'>{props.movie.title}</h2>
    </div>
);

export default MovieRight;
