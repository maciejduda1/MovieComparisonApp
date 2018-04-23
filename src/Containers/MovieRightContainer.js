import { connect } from 'react-redux';
import MovieLeft from '../Presentational/MovieLeft';
import { searchDatabase, addMovieLeft } from '../actions.js';

const mapStateToProps = (state) => ({
    movie: state.movieLeft
});

export default connect(mapStateToProps)(MovieLeft);