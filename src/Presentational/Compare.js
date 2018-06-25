import React, {Component} from 'react';
import '../Css/Compare.css';
import noResultLogo from '../images/board-cinema-cinematography-274937.jpg';
import LoadingScreenLogo from '../images/pensive black and white GIF by Tobias Rothe-source.gif';

class Compare extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.compare()
    }

    openModal(id) {
        const modal = document.getElementById(id);
        modal.style.display = "block";
    }

    closeModal(id) {
        const modal = document.getElementById(id);
        modal.style.display = "none";
    }

    render() {
        let backgroundMovieImageRight = 'https://image.tmdb.org/t/p/original' + this.props.movieRight.backdrop_path,
        backgroundMovieImageLeft = 'https://image.tmdb.org/t/p/original' + this.props.movieLeft.backdrop_path;
        const backgroundStyleLeft = {
            backgroundImage: 'url('+ backgroundMovieImageLeft +')',
            backgroundSize: 'cover',
             
        }
        const backgroundStyleRight = {
            backgroundImage: 'url('+ backgroundMovieImageRight +')',
            backgroundSize: 'cover',
        }

        if (this.props.movieCompare[0] == undefined) {
            return(
                <div className="loading-results">
                    <img  src={LoadingScreenLogo} alt="" />
                </div>
            );  
        }

        return (    
            <div className='compare'>
                <div className='compare-all'>
                    <div className='compare-img-button'>
                        <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${this.props.movieLeft.poster_path}`} alt='movie poster'></img>
                        <button onClick={() => this.openModal('movie1')}>more info</button>
                    </div>
                    <div className='movie-compare-section'>
                        <p>Revenue Difference:</p>
                        <p>{this.props.movieCompare[0].winner} earned <mark>${this.props.movieCompare[0].value}</mark> more than {this.props.movieCompare[0].looser}</p>
                        <p>Bigger Budget:</p>
                        <p>{this.props.movieCompare[1].winner} had a budget bigger by <mark>${this.props.movieCompare[1].value}</mark> than {this.props.movieCompare[1].looser} </p>
                        <p>More Popular:</p>
                        <p>{this.props.movieCompare[3].winner} is more popular amongst moviedb viewers by <mark>{this.props.movieCompare[3].value} point/points</mark> than {this.props.movieCompare[3].looser}</p>
                        <p>Higher Average Score:</p>
                        <p>{this.props.movieCompare[2].winner} gets higher user score by <mark>{this.props.movieCompare[2].value} point/points</mark> than {this.props.movieCompare[2].looser}</p>    
                    </div>
                    <div className='compare-img-button'>
                        <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${this.props.movieRight.poster_path}`} alt='movie poster'></img>
                        <button onClick={() => this.openModal('movie2')}>more info</button>
                    </div>
                </div>
                
                <div className='movie-to-compare' id='movie1' style={backgroundStyleLeft}>
                    <div className='about-movie-section'>
                        <h1>"{this.props.movieLeft.title}"</h1>
                        <i>"{this.props.movieLeft.tagline}"</i>
                        <h2>Release date:{this.props.movieLeft.release_date}</h2>
                        <p>Revenue: ${this.props.movieLeft.revenue}</p>
                        <p>Budget: ${this.props.movieLeft.budget}</p>
                        <p>Popularity: {this.props.movieLeft.popularity}</p>
                        <p>Average Vote: {this.props.movieLeft.vote_average}</p>
                        <p>Overview: <span>{this.props.movieLeft.overview}</span></p>
                        <button onClick={() => this.closeModal('movie1')}> Close </button>
                    </div>
                   
                </div>
                <div className='movie-to-compare' id='movie2' style={backgroundStyleRight}>
                    
                    <div className='about-movie-section'>
                        <h1>{this.props.movieRight.title}</h1>
                        <i>"{this.props.movieRight.tagline}"</i>
                        <h2>Release date:{this.props.movieRight.release_date}</h2>
                        <p>Revenue: ${this.props.movieRight.revenue}</p>
                        <p>Budget: ${this.props.movieRight.budget}</p>
                        <p>Popularity: {this.props.movieRight.popularity}</p>
                        <p>Average Vote: {this.props.movieRight.vote_average}</p>
                        <p>Overview: <span>{this.props.movieRight.overview}</span></p>
                        <button onClick={() => this.closeModal('movie2')}> Close </button>
                    </div>
                    
                </div>
            </div>
        );
    }
} 
/*
<img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${this.props.movieRight.poster_path}`} alt='movie poster'></img>
<img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${this.props.movieLeft.poster_path}`} alt='movie poster'></img>

 if (this.props.movieLeft.title == undefined  && this.props.movieRight.title !== undefined ) {
                return (
                    <div className='compare'>
                        <div className='movie-to-compare' style={backgroundStyleRight}>
                            <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${this.props.movieRight.poster_path}`} alt='movie poster'></img>
                            <div className='about-movie-section'>
                                <h1>{this.props.movieRight.title}</h1>
                                <i>"{this.props.movieRight.tagline}"</i>
                                <h2>Release date:{this.props.movieRight.release_date}</h2>
                                <p>Revenue: ${this.props.movieRight.revenue}</p>
                                <p>Budget: ${this.props.movieRight.budget}</p>
                                <p>Popularity: {this.props.movieRight.popularity}</p>
                                <p>Average Vote: {this.props.movieRight.vote_average}</p>
                                <p>Overview: <span>{this.props.movieRight.overview}</span></p>
                            </div>
                        </div>
                    </div>
                );
            } else if (this.props.movieRight.title == undefined && this.props.movieLeft.title !== undefined) {
                return (
                    <div className='compare'>
                         <div className='movie-to-compare'  style={backgroundStyleLeft}>
                            <img className='movie-poster-compare' src={`https://image.tmdb.org/t/p/w500${this.props.movieLeft.poster_path}`} alt='movie poster'></img>
                            <div className='about-movie-section'>
                                <h1>"{this.props.movieLeft.title}"</h1>
                                <i>{this.props.movieLeft.tagline}</i>
                                <h2>Release date:{this.props.movieLeft.release_date}</h2>
                                <p>Revenue: ${this.props.movieLeft.revenue}</p>
                                <p>Budget: ${this.props.movieLeft.budget}</p>
                                <p>Popularity: {this.props.movieLeft.popularity}</p>
                                <p>Average Vote: {this.props.movieLeft.vote_average}</p>
                                <p>Overview: <span>{this.props.movieLeft.overview}</span></p>
                            </div>
                        </div>
                    </div>
                );
            } else if (this.props.movieLeft.title == undefined  && this.props.movieRight.title == undefined){
                return (
                    <div className='compare'>
                        <h1>Find some movies to compare first!</h1>
                        <img src={noResultLogo} alt='no movie to compare poster'/>
                    </div>
                );
            } 
*/
export default Compare;
