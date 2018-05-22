import React from 'react';
import Movie from '../Containers/MovieContainer';
import Filter from './Filter';
import { Redirect } from 'react-router-dom';
import '../Css/Main.css';
import noResultLogo from '../images/board-cinema-cinematography-274937.jpg';
import LoadingScreenLogo from '../images/pensive black and white GIF by Tobias Rothe-source.gif'

const Main = (props) => {

    if (!props.loading && !props.gotResults && props.resultPages > 0) {
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
    
    return (
        <div className="main-page">
            <h1>Welcome inside movie compare app!</h1>
            <p>compare your favorite movies</p>
        </div>
    );

}

export default Main;
