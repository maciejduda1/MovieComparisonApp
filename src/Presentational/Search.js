import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
/*
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedSomething: false
        };
    }

    componentWillMount() {
        this.setState({searchedSomething: false});
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
            return <Redirect to="/"/>
        }

        
    }
}
*/

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

/*
                onKeyUp = {(event) => {
                    if (event.keyCode === 13) {
                        return props.searchDatabase(this.input.value);
                    } 
                }}
*/

export default Search;


