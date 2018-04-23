import React from 'react';
import Movie from '../Containers/MovieContainer';
import { connect } from 'react-redux';
import Filter from './Filter';
import { searchDatabase } from '../actions';

const Results = (props) => {
    if (!props.gotResults) {
        return (
            <div>Get some results bro!</div>
        )
    }
    return (
        <div className='results-page'>
            <Filter pages={props.resultPages} searchDatabase={props.searchDatabase} searchedTitle={props.searchedTitle} />
            Results Module
            <Movie/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    resultPages: state.resultPages,
    page: state.page,
    gotResults: state.gotResults,
    searchedTitle: state.searchedTitle
});

const mapDispatchToProps = dispatch => ({
    searchDatabase: (event, page) => dispatch(searchDatabase(event, page)),
    changePage: (page) => dispatch(searchDatabase(page))
});


export default connect(mapStateToProps, mapDispatchToProps)(Results);