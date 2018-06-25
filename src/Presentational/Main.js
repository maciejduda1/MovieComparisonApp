import React from 'react';
import { Redirect } from 'react-router-dom';
import Movie from '../Containers/MovieContainer';
import Filter from './Filter';
import Search from '../Containers/SearchContainer';
import '../Css/Main.css';
import noResultLogo from '../images/board-cinema-cinematography-274937.jpg';
import LoadingScreenLogo from '../images/pensive black and white GIF by Tobias Rothe-source.gif'


const Main = (props) => {
    if (!props.loading && !props.gotResults && props.resultPages > 0 && props.movieLeft.title == undefined) {
        return (
            <div className="loading-results">
                <img  src={noResultLogo} alt="no results logo"/>
            </div>
        );
    }

    if (props.didCompare) {
        return <Redirect to="/compare"/>
    }

    if (!props.loading && props.gotResults) {
        return (
            <div className="loading-results">
                <Filter pages={props.resultPages} searchDatabase={props.searchDatabase} searchedTitle={props.searchedTitle} />
                <Movie/>
            </div>
        );
    }    

    if (props.loading) {
        return (
            <div className="loading-results">
                <img  src={LoadingScreenLogo} alt="" />
            </div>
            
        );
    }

    if ( props.movieLeft.title !== undefined ) {
        return (
            <div className="main-page">
                <p> Find something to compare with {props.movieLeft.title}! </p>
                <Search />
            </div>
        );
    }

    return (
        <div className="main-page">
            <p>Welcome inside my App! I hope you will enjoy your stay!</p> 
            <Search />
        </div>
    );
}

export default Main;
