import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedSomething: false
        };
    }

    render() {
        if(!this.state.searchedSomething){
            return (
                <div className="search-box">
                    <form onSubmit={e => {this.setState({searchedSomething: true}); return e.preventDefault(); }}>
                        <input 
                            type='text'
                            ref={(input) => this.input = input}     
                            placeholder = 'Movie Title'
                        /> 
                        <input type='submit' value='Submit' onClick={(event) => this.props.searchDatabase(this.input.value)}/>
                    </form>
                </div>
            );
        } else {
            this.setState({searchedSomething: false});
            return <Redirect to="/"/>
        }

        
    }
}










/*
const Search = (props) => (
    <div className="search-box">
        <form onSubmit={e => {e.preventDefault(); return <Redirect to="/"/>}}>
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
/*
                onKeyUp = {(event) => {
                    if (event.keyCode === 13) {
                        return props.searchDatabase(this.input.value);
                    } 
                }}
                */
export default Search;


