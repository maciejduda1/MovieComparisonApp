const ADD_MOVIE_LEFT = 'ADD_MOVIE_LEFT';
const ADD_MOVIE_RIGHT = 'ADD_MOVIE_RIGHT';
const SEARCH_DATABASE_REQUESTED = 'SEARCH_DATABASE_REQUESTED';
const GET_RESPONSE_DONE ='GET_RESPONSE_DONE';
const GET_RESPONSE_FAILED = 'GET_RESPONSE_FAILED';
const COMPARE_MOVIES = 'COMPARE_MOVIES';
const RESET_STATE = 'RESET_STATE';
const CONTINUE_COMPARES = 'CONTINUE_COMPARES';

function continueCompares() {
    return {
        type: CONTINUE_COMPARES,
    }
}


function resetState() {
    return {
        type: RESET_STATE
    }
}

function searchDatabaseRequested() {
   return {
       type: SEARCH_DATABASE_REQUESTED
   }
}

function getResponseFailed(error) {
    return {
        type:GET_RESPONSE_FAILED,
        error
    }
}

function getResponseDone(data, title) {
    return {
        type: GET_RESPONSE_DONE,
        data,
        title
    }
}

function addMovieLeft(movie) {
    return {
        type: ADD_MOVIE_LEFT,
        movie
    }
}

function addMovieRight(movie) {
    return {
        type: ADD_MOVIE_RIGHT,
        movie
    }
}

function compareMovies() {
    return {
        type: COMPARE_MOVIES,
    }  
}

function searchDetailsLeft(movie) {
    return dispatch => {
        const api_key = 'e7cbc37b2431954da6cfc6053cd4e9f8';
        const URL = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + api_key;
        fetch(URL).then( (res) => res.json())
            .then( (data) => {
            dispatch(addMovieLeft(data))
        })
    }
}

function searchDetailsRight(movie) {
    return dispatch => {
        const api_key = 'e7cbc37b2431954da6cfc6053cd4e9f8';
        const URL = 'https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + api_key;
        fetch(URL).then( (res) => res.json())
            .then( (data) => {
            dispatch(addMovieRight(data))
            })
    }
}

function searchDatabase(event, page) {
    return dispatch => {
        dispatch(searchDatabaseRequested());
        const movieTitle = event
        const resultsPage = page || 1;
        const api_key = 'e7cbc37b2431954da6cfc6053cd4e9f8';
        const URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=' + api_key + '&query=' + movieTitle + '&page=' + resultsPage;
        fetch(URL)
            .then( (res) => {
                if (res.status) {
                  return res.json();
                } 
                dispatch(getResponseFailed(Error));
                throw new Error('błąd w połączeniu');

            })
                .then( (data) => {
                    dispatch(getResponseDone(data, movieTitle));
                })  
                .catch( error => {
                        dispatch(getResponseFailed(error));
                    })    
                  
    }
}

export { ADD_MOVIE_LEFT, ADD_MOVIE_RIGHT, GET_RESPONSE_DONE, GET_RESPONSE_FAILED, SEARCH_DATABASE_REQUESTED, COMPARE_MOVIES, RESET_STATE, CONTINUE_COMPARES, continueCompares, resetState, addMovieLeft, addMovieRight, searchDatabase, searchDetailsLeft, searchDetailsRight, searchDatabaseRequested, getResponseDone, getResponseFailed, compareMovies };
