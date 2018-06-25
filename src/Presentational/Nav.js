import React from 'react';
import { Link } from 'react-router-dom';
import MovieLeft from '../Containers/MovieLeftContainer';
import MovieRight from '../Containers/MovieRightContainer';
import '../Css/Nav.css';
import logo from '../images/logo-rectangle-green.png';

const Nav = (props) => (
    <header>
        <div className="search-bar">
            <div className="compare-bar">
                <h1> Movie <mark>Compare</mark> App </h1>
                <Link to={'/'} onClick={props.reset}>New Search</Link>
                {  props.movieLeft.title !== undefined &&
                    <Link to={'/'} onClick={props.continue}>Continue Comparing with {props.movieLeft.title}</Link>    
                
                }
                {  props.movieLeft.title !== undefined &&
                    <div className='compare-mini-movies'>
                        <MovieLeft />
                        <h2>VS</h2>
                        <MovieRight/>
                    </div>
                }
            </div>
            <div className="moviedb-image">
                <img src={logo} alt="MovieDB Logo" />
            </div>
        </div>
    </header>
);

export default Nav;
