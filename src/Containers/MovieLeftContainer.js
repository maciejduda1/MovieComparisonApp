import { connect } from 'react-redux';
import MovieRight from '../Presentational/MovieRight';
import { searchDatabase, addMovieLeft, addMovieRight } from '../actions.js';

const mapStateToProps = (state) => ({
    movie: state.movieRight
});

export default connect(mapStateToProps)(MovieRight);