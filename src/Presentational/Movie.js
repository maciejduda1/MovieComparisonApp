import React from 'react';

const Movie = (props) => (
    <div className='movies'>
        {props.movies.map( (movie) => {
            return (
                <div className='single-movie' key={movie.id}>
                    <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='http://via.placeholder.com/50x50'></img>
                    <h2 className='movie-title'>{movie.title}</h2>
                    <div className='buttons'>
                        <button onClick={() => props.addMovieLeft(movie)} >AddLeft</button>
                        <button onClick={() => props.addMovieRight(movie)}>AddRight</button>
                    </div> 
                </div>
            );
        })}
    </div>   
)

export default Movie;