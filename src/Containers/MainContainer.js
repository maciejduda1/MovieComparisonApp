import { connect } from 'react-redux';
import Main from '../Presentational/Main';
import { searchDatabase, compareMovies } from '../actions';

const mapStateToProps = (state) => ({
    loading: state.loading,
    searchResults: state.searchResults,
    gotResults: state.gotResults,
    resultPages: state.resultPages,
    page: state.page,
    searchedTitle: state.searchedTitle,
    movieLeft: state.movieLeft,
    movieRight: state.movieRight,
    didCompare: state.didCompare,
    
});

const mapDispatchToProps = dispatch => ({
    searchDatabase: (event, page) => dispatch(searchDatabase(event, page)),
    changePage: (page) => dispatch(searchDatabase(page)),
    compare: () => dispatch(compareMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

