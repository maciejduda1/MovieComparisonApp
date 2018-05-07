import React from 'react';

const Movie = (props) => (
    <div className='movies'>
        {props.movies.map( (movie) => {
            return (
                <div className='single-movie' key={movie.id}>
                    <div className='poster-container'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster'></img>
                    </div>
                    <div className='movie-title'>
                        <h2 >{movie.title}</h2>
                    </div>
                    
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
