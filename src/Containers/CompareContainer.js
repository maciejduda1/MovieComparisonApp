import { connect } from 'react-redux';
import Compare from '../Presentational/Compare';

const mapStateToProps = (state) => ({
    movieLeft: state.movieLeft,
    movieRight: state.movieRight,
    movieCompare: state.movieCompare 
});
    
export default connect(mapStateToProps)(Compare);
