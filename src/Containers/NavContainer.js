import { connect } from 'react-redux';
import Nav from '../Presentational/Nav';
import { resetState, continueCompares } from '../actions.js';

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetState()),
    continue: () => dispatch(continueCompares()),
});

const mapStateToProps = state => ({
    gotResults: state.gotResults,
    movieLeft: state.movieLeft,
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
