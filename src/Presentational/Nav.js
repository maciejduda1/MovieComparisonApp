import React from 'react';
import Search from '../Containers/SearchContainer.js';
import { Link } from 'react-router-dom';
import MovieLeft from '../Containers/MovieLeftContainer';
import MovieRight from '../Containers/MovieRightContainer';
import '../Css/Nav.css';
import logo from '../images/logo.png';

const Nav = (props) => {
    if (props.gotResults) {
        return (
            <div className="search-bar">
                <div className="moviedb-image">
                    <img src={logo} alt="MovieDB Logo" />
                </div>
                <div className="compare-bar">
                    <Search />
                    <div className="link-buttons">
                        <Link to='/results'>All Results</Link>
                        <Link to={'/compare'} onClick={props.compare}>Compare</Link>
                    </div>
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
            <div className="moviedb-image">
                <img src={logo} alt="MovieDB Logo" />
            </div>
            <div className="compare-bar">
                <Search />
                <div className="link-buttons">
                    <Link to={'/compare'} onClick={ (e)=> e.preventDefault() }>Compare</Link>
                    <Link to='/results' onClick={(e)=> e.preventDefault() }>All Results</Link>
                </div>
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