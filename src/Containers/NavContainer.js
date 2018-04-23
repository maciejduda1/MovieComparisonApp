import { connect } from 'react-redux';
import Nav from '../Presentational/Nav';
import { compareMovies } from '../actions.js';

const mapDispatchToProps = dispatch => ({
    compare: () => dispatch(compareMovies()),
});

const mapStateToProps = state => ({
    gotResults: state.gotResults
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
