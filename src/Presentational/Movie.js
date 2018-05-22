import React from 'react';

const Movie = (props) => (
    <div className='movies'>
        {props.movies.map( (movie) => {
            return (
                <div className='single-movie' key={movie.id}>
                    <div className='poster-container'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=' no movie poster'></img>
                    </div>
                    <div className='movie-title'>
                        <h2 >{movie.title}</h2>
                    </div>
                    <div className='buttons'>
                        <AddButton movieLeft={props.movieLeft} movie={movie} addMovieLeft={()=>props.addMovieLeft(movie)} addMovieRight={()=>props.addMovieRight(movie)}/>
                    </div> 
                </div>
            );
        })} 
    </div>   
)

const AddButton = (props) => (props.movieLeft.title == undefined) ?  <button onClick={() => props.addMovieLeft(props.movie)} >Select movie</button> : <button onClick={() => props.addMovieRight(props.movie)}>Compare with</button>


export default Movie;
