import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => (
    <div className='movies'>
        {props.movies.map( (movie) => {
            return (
                <div className='single-movie' key={movie.id}>
                    <div className="poster-container">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster'></img>
                    </div>
                    <h2 className='movie-title'>{movie.title}</h2>
                    <div className='buttons'>
                        <button onClick={() => props.addMovieLeft(movie)} >AddLeft</button>
                        <button onClick={() => props.addMovieRight(movie)}>AddRight</button>
                    </div> 
                </div>
            );
        })}
        <Link to='/results'>More results...</Link>
    </div>   
)

export default Movie;