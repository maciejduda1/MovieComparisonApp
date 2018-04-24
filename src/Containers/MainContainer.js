import { connect } from 'react-redux';
import Main from '../Presentational/Main';

const mapStateToProps = (state) => ({
    loading: state.loading,
    searchResults: state.searchResults,
    gotResults: state.gotResults,
});

export default connect(mapStateToProps)(Main);
