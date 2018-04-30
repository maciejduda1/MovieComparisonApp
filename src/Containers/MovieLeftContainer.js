import { connect } from 'react-redux';
import MovieRight from '../Presentational/MovieRight';
import { searchDatabase, addMovieLeft, addMovieRight } from '../actions.js';

const mapStateToProps = (state) => ({
    movie: state.movieLeft
});

export default connect(mapStateToProps)(MovieRight);