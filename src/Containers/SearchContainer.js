import { connect } from 'react-redux';
import Search from '../Presentational/Search';
import { searchDatabase } from '../actions.js';

const mapDispatchToProps = dispatch => ({
    searchDatabase: (event) => dispatch(searchDatabase(event)),
});

const mapStateToProps = state => ({
    loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
