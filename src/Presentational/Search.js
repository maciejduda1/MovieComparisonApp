import React from 'react';

const Search = (props) => (
    <div className="search-box">
        <input 
            type='text'
            onKeyUp = {(event) => {
                if (event.keyCode === 13 && event.target.value.length > 4) {
                    return props.searchDatabase(event.target.value);
                } 
            }}     
            placeholder = 'Searched Movie Title (min. 5 signs) + Enter'
        /> 
    </div>
);

export default Search;


