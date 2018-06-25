import { connect } from 'react-redux';
import MovieLeft from '../Presentational/MovieLeft';

const mapStateToProps = (state) => ({
    movie: state.movieRight
});

export default connect(mapStateToProps)(MovieLeft);