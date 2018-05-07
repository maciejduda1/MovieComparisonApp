import React from 'react';

const MovieLeft = (props) => (
    <div className='movie-small'>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt='movie poster'></img>
    </div>
);

export default MovieLeft;
// 
