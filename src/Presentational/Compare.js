import React from 'react';
import '../Css/Compare.css';

const Compare = (props) => {
    let backgroundMovieImageRight = 'https://image.tmdb.org/t/p/original' + props.movieRight.backdrop_path,
        backgroundMovieImageLeft = 'https://image.tmdb.org/t/p/original' + props.movieLeft.backdrop_path;
    const backgroundStyleLeft = {
        backgroundImage: 'url('+ backgroundMovieImageLeft +')',
    }
    const backgroundStyleRight = {
        backgroundImage: 'url('+ backgroundMovieImageRight +')',
    }
   // console.log('props backgrounds ', backgroundMovieImageRight, backgroundMovieImageLeft );
    if (props.movieLeft.title == undefined  && props.movieRight.title !== undefined ) {
        return (
            <div className='compare'>
                <div className='movie-to-compare' style={backgroundStyleRight}>
                    <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieRight.poster_path}`} alt='movie poster'></img>
                    <h1>{props.movieRight.title}</h1>
                    <i>"{props.movieRight.tagline}"</i>
                    <h2>Release date:{props.movieRight.release_date}</h2>
                    <p>Revenue: ${props.movieRight.revenue}</p>
                    <p>Budget: ${props.movieRight.budget}</p>
                    <p>Popularity: {props.movieRight.popularity}</p>
                    <p>Average Vote: {props.movieRight.vote_average}</p>
                    <p>Overview: <span>{props.movieRight.overview}</span></p>
                </div>
            </div>
        );
    } else if (props.movieRight.title == undefined && props.movieLeft.title !== undefined) {
        return (
            <div className='compare'>
                 <div className='movie-to-compare'  style={backgroundStyleLeft}>
                    <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieLeft.poster_path}`} alt='movie poster'></img>
                    <h1>"{props.movieLeft.title}"</h1>
                    <i>{props.movieLeft.tagline}</i>
                    <h2>Release date:{props.movieLeft.release_date}</h2>
                    <p>Revenue: ${props.movieLeft.revenue}</p>
                    <p>Budget: ${props.movieLeft.budget}</p>
                    <p>Popularity: {props.movieLeft.popularity}</p>
                    <p>Average Vote: {props.movieLeft.vote_average}</p>
                    <p>Overview: <span>{props.movieLeft.overview}</span></p>
                </div>
            </div>
        );
    } else if (props.movieLeft.title == undefined  && props.movieRight.title == undefined){
        return (
            <div className='compare'>
                <h1>Find some movies to compare first!</h1>
            </div>
        );
    } 
    return (
        <div className='compare'>
            <div className='movie-to-compare'  style={backgroundStyleLeft}>
                <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieLeft.poster_path}`} alt='movie poster'></img>
                <h1>"{props.movieLeft.title}"</h1>
                <i>"{props.movieLeft.tagline}"</i>
                <h2>Release date:{props.movieLeft.release_date}</h2>
                <p>Revenue: ${props.movieLeft.revenue}</p>
                <p>Budget: ${props.movieLeft.budget}</p>
                <p>Popularity: {props.movieLeft.popularity}</p>
                <p>Average Vote: {props.movieLeft.vote_average}</p>
                <p>Overview: <span>{props.movieLeft.overview}</span></p>
            </div>
            <div className='movie-compare-section'>
                <p>Revenue Difference:</p>
                <p>{props.movieCompare[0].winner} earned ${props.movieCompare[0].value} more!</p>
                <p>Bigger Budget:</p>
                <p>{props.movieCompare[1].winner} by ${props.movieCompare[1].value}</p>
                <p>More Popular:</p>
                <p>{props.movieCompare[2].winner} by {props.movieCompare[2].value} point/points</p>
                <p>Higher Average Score:</p>
                <p>{props.movieCompare[3].winner} scored higher by {props.movieCompare[3].value} point/points</p>    
            </div>
            <div className='movie-to-compare'  style={backgroundStyleRight}>
                <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieRight.poster_path}`} alt='movie poster'></img>
                <h1>{props.movieRight.title}</h1>
                <i>"{props.movieRight.tagline}"</i>
                <h2>Release date:{props.movieRight.release_date}</h2>
                <p>Revenue: ${props.movieRight.revenue}</p>
                <p>Budget: ${props.movieRight.budget}</p>
                <p>Popularity: {props.movieRight.popularity}</p>
                <p>Average Vote: {props.movieRight.vote_average}</p>
                <p>Overview: <span>{props.movieRight.overview}</span></p>
            </div>
        </div>
    );
} 





    



export default Compare;