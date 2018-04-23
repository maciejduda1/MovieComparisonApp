import React from 'react';

const Compare = (props) => {
    if (props.movieLeft.title == undefined  && props.movieRight.title !== undefined ) {
        return (
            <div className='Compare'>
                <div className='movie-right'>
                    <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieRight.poster_path}`} alt='http://via.placeholder.com/50x50'></img>
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
            <div className='Compare'>
                 <div className='movie-left'>
                    <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieLeft.poster_path}`} alt='http://via.placeholder.com/50x50'></img>
                    <h1>"{props.movieLeft.title}"</h1>
                    <i>{props.movieRight.tagline}</i>
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
            <div className='Compare'>
                <h1>Find some movies to compare first!</h1>
            </div>
        );
    } 
    return (
        <div className='Compare'>
            <div className='movie-left'>
                <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieLeft.poster_path}`} alt='http://via.placeholder.com/50x50'></img>
                <h1>"{props.movieLeft.title}"</h1>
                <i>{props.movieRight.tagline}</i>
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
            <div className='movie-right'>
                <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${props.movieRight.poster_path}`} alt='http://via.placeholder.com/50x50'></img>
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