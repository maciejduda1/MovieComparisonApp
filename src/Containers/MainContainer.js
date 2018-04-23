import { connect } from 'react-redux';
import Main from '../Presentational/Main';

const mapStateToProps = (state) => ({
    loading: state.loading,
    searchResults: state.searchResults
});

export default connect(mapStateToProps)(Main);
