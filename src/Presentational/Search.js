import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const Search = (props) => { 
    if (props.loading) {
        return <Redirect to="/"/>
    }
    return (
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
}

export default Search;
