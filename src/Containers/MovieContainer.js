import { connect } from 'react-redux';
import Movie from '../Presentational/Movie';
import { searchDetailsLeft, searchDetailsRight } from '../actions.js';

const mapStateToProps = (state) => ({
    movies: state.searchResults,
    page: state.page,
    movieLeft: state.movieLeft,
});

const mapDispatchToProps = dispatch => ({
    addMovieLeft: (movie) => dispatch(searchDetailsLeft(movie)),
    addMovieRight: (movie) => dispatch(searchDetailsRight(movie)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
