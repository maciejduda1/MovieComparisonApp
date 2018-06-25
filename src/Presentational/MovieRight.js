import React from 'react';

const MovieRight = (props) => (
    <div className='movie-small'>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt=''></img>
    </div>
);

export default MovieRight;
