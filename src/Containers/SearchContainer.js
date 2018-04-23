import { connect } from 'react-redux';
import Search from '../Presentational/Search';
import { searchDatabase } from '../actions.js';

const mapDispatchToProps = dispatch => ({
    searchDatabase: (event) => dispatch(searchDatabase(event)),
});

export default connect(null, mapDispatchToProps)(Search);
