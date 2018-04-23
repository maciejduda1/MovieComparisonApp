import { ADD_MOVIE_LEFT, ADD_MOVIE_RIGHT, GET_RESPONSE_DONE, GET_RESPONSE_FAILED, SEARCH_DATABASE_REQUESTED, COMPARE_MOVIES } from './actions.js';

const initialState = {
    movieLeft: {},
    movieRight: {},
    movieCompare: {},
    gotResults: false,
    searchResults: {},
    loading: false,
    page: 1,
    resultPages: 1,
    searchedTitle: '',
};

function appReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE_LEFT: 
            console.log('addMovieLeft data ', action.movie );
            return Object.assign({}, state, { movieLeft: action.movie });

        case ADD_MOVIE_RIGHT:
            console.log('addMovieRight data ', action.movie );
            return Object.assign({}, state, { movieRight: action.movie });
    
        case GET_RESPONSE_FAILED:
            console.log('error', action.error);

        case GET_RESPONSE_DONE:
            console.log('resultPages: ', action.data.total_pages );
            return Object.assign({}, state, { searchResults: action.data.results, loading: false, gotResults: true, resultPages: action.data.total_pages, searchedTitle: action.title });

        case SEARCH_DATABASE_REQUESTED:
            return Object.assign({}, state, {loading: true});

        case COMPARE_MOVIES:
            if (state.movieLeft.title !== undefined && state.movieRight.title !== undefined && state.movieLeft.release_date != state.movieRight.release_date){
                const compareAll = [state.movieLeft.revenue - state.movieRight.revenue, state.movieLeft.budget - state.movieRight.budget, state.movieLeft.vote_average - state.movieRight.vote_average, state.movieLeft.popularity - state.movieRight.popularity];
                let Winners = compareAll.map((data) => {
                    if (data > 0) {
                        return {value: data, winner: state.movieLeft.title };
                    } else if (data < 0){
                        return { value: Math.abs(data), winner: state.movieRight.title };
                    } else {
                        return { value: 0, winner: 'noone' };
                    }
                });
                console.log(Winners);
                return Object.assign({}, state, { movieCompare: Winners });
            };

        default: 
            return state;
    }
} 

export default appReducer;
