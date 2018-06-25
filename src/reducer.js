import { ADD_MOVIE_LEFT, ADD_MOVIE_RIGHT, GET_RESPONSE_DONE, GET_RESPONSE_FAILED, SEARCH_DATABASE_REQUESTED, COMPARE_MOVIES, RESET_STATE, CONTINUE_COMPARES } from './actions.js';

const initialState = {
    movieLeft: {},
    movieRight: {},
    movieCompare: {},
    gotResults: false,
    searchResults: {},
    loading: false,
    page: 1,
    resultPages: 0,
    searchedTitle: '',
    didCompare: false, 
};

function appReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE_LEFT: 
            if (action.movie.backdrop_path !== state.movieRight.backdrop_path) {
                return Object.assign({}, state, { movieLeft: action.movie, gotResults: false });
            }
            return Object.assign({}, state, {});
        case ADD_MOVIE_RIGHT:
            if (action.movie.backdrop_path !== state.movieLeft.backdrop_path) {
                return Object.assign({}, state, { movieRight: action.movie, didCompare: true });
            }
            return Object.assign({}, state, {});
        case GET_RESPONSE_FAILED:
            console.log('error!!!', action.error, state.gotResults);
            return Object.assign({}, state, { loading: false, gotResults: false });

        case GET_RESPONSE_DONE:
            console.log('resultPages: ', action.data.total_pages );
            return Object.assign({}, state, { searchResults: action.data.results, loading: false, gotResults: true, resultPages: action.data.total_pages, searchedTitle: action.title });

        case SEARCH_DATABASE_REQUESTED:
            return Object.assign({}, state, { loading: true, didCompare: false });
        
        case RESET_STATE:
            return state = initialState;

        case CONTINUE_COMPARES:
            return Object.assign({}, state, { movieRight: {}, didCompare: false, gotResults: false });

        case COMPARE_MOVIES:
            if (state.movieLeft.title !== undefined && state.movieRight.title !== undefined && state.movieLeft.release_date != state.movieRight.release_date){
                const compareAll = [(state.movieLeft.revenue - state.movieRight.revenue).toFixed(2), (state.movieLeft.budget - state.movieRight.budget).toFixed(2), (state.movieLeft.vote_average - state.movieRight.vote_average).toFixed(2), (state.movieLeft.popularity - state.movieRight.popularity).toPrecision(2)];
                let Winners = compareAll.map((data) => {
                    if (data > 0) {
                        return { value: numberWithSpaces(data), winner: state.movieLeft.title, looser: state.movieRight.title };
                    } else if (data < 0){
                        return { value: numberWithSpaces(Math.abs(data)), winner: state.movieRight.title, looser: state.movieLeft.title  };
                    } else {
                        return { value: 0, winner: 'noone' };
                    }
                });
                
                return Object.assign({}, state, { movieCompare: Winners });
            };

        default: 
            return state;
    }
} 

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

export default appReducer;
