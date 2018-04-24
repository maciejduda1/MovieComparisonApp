import React, { Component } from 'react';
import Movie from './Movie.js'

const Search = (props) => (
    <div className="search-box">
        <input 
            type='text'
            onKeyUp = {(event) => {
                //console.log('3 dane: ', event.keyCode, event.target.value.length, props.searchDatabase );
                if (event.keyCode === 13 && event.target.value.length > 4) {
                    return props.searchDatabase(event.target.value);
                } 
            }}     
            placeholder = 'Searched Movie Title (min. 5 signs) + Enter'
        /> 
    </div>
);

export default Search;

/*
class Search extends Component {
    constructor(props) {
        super(props);
    }

    searchDatabase(event) {
        if (event.keyCode === 13 && event.target.value.length > 4)  {
            const movieTitle = event.target.value;
            const api_key = 'e7cbc37b2431954da6cfc6053cd4e9f8';
            const URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=' + api_key + '&query=' + movieTitle;
            fetch(URL).then( (res) => res.json())
            .then( (data) => {
                console.log('search result: ', data);
                return(data)
            });
        }
    }
*/

