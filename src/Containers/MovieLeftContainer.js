import { connect } from 'react-redux';
import MovieRight from '../Presentational/MovieRight';

const mapStateToProps = (state) => ({
    movie: state.movieLeft
});

export default connect(mapStateToProps)(MovieRight);