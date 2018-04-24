import React from 'react';
import Search from '../Containers/SearchContainer.js';
import { Link } from 'react-router-dom';
import MovieLeft from '../Containers/MovieLeftContainer';
import MovieRight from '../Containers/MovieRightContainer';

const Nav = (props) => {
    if (props.gotResults) {
        return (
            <div className="search-bar">
                <img src="http://via.placeholder.com/50x50" alt=""/>
                <Search />
                <Link to='/results'>All Results</Link>
                <div className="compare-bar">
                    <Link to={'/compare'} onClick={props.compare}>Compare</Link>
                    <div className='compare-mini-movies'>
                        <MovieLeft />
                        <h2>VS</h2>
                        <MovieRight/>
                    </div>              
                </div>
            </div>
        );
    }
    return (
        <div className="search-bar">
            <img src="http://via.placeholder.com/50x50" alt="" />
            <Search />
            <Link to='/results' onClick={(e)=> e.preventDefault() }>All Results</Link>
            <div className="compare-bar">
                <Link to={'/compare'} onClick={ (e)=> e.preventDefault() }>Compare</Link>
                <div className='compare-mini-movies'>
                    <MovieLeft />
                    <h2>VS</h2>
                    <MovieRight/>
                </div>
            </div>
        </div>
    );
}
export default Nav;