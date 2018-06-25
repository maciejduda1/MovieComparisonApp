import { connect } from 'react-redux';
import Compare from '../Presentational/Compare';
import {compareMovies} from '../actions';

const mapStateToProps = (state) => ({
    movieLeft: state.movieLeft,
    movieRight: state.movieRight,
    movieCompare: state.movieCompare 
});

const mapDispatchToProps = dispatch => ({
    compare: () => dispatch(compareMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
