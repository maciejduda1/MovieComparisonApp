import React from 'react';

const Search = (props) => (
    <div className="search-box">
        <form onSubmit={e => e.preventDefault()}>
            <input 
                type='text'
                
                ref={(input) => this.input = input}     
                placeholder = 'Movie Title'
            /> 
            <input type='submit' value='Submit' onClick={(event) => props.searchDatabase(this.input.value)}/>
        </form>
    </div>
);

/*
                onKeyUp = {(event) => {
                    if (event.keyCode === 13) {
                        return props.searchDatabase(this.input.value);
                    } 
                }}
                */
export default Search;


