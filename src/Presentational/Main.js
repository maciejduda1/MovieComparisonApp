import React from 'react';
import Movie from '../Containers/MovieContainer';
import { Link } from 'react-router-dom';

const Main = (props) => {
    if (!props.loading && !props.gotResults) {
        return (
            <div>
                <img className='loading-results' src='../../public/board-cinema-cinematography-274937.jpg' alt=""/>
            </div>
        );
    }

    if (!props.loading && props.gotResults) {
     //   console.log('działam tu!');
        return (
            <div>
                <Movie/>
                <Link to='/results'>More results...</Link>
            </div>
        );
    }    
    if (props.loading && !props.gotResults) {
        return (
            <img className="loading-results" src="../../public/pensive black and white GIF by Tobias Rothe-source.gif"  alt="" />
        );
    }
    
    return (
        <div className='main-page'>
            <h1>Welcome inside movie compare app!</h1>
            <p>compare your favorite movies</p>
        </div>
    );
}

export default Main;
