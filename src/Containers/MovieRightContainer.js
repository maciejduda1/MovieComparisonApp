import { connect } from 'react-redux';
import MovieLeft from '../Presentational/MovieLeft';
import { searchDatabase, addMovieLeft } from '../actions.js';

const mapStateToProps = (state) => ({
    movie: state.movieRight
});

export default connect(mapStateToProps)(MovieLeft);