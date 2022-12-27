import {SET_POPULAR_MOVIES, SET_SEARCHED_MOVIES, SET_DETAILS} from "./types";

export const setPopularMovies = (payload) => ({
    type: SET_POPULAR_MOVIES,
    payload,
})

export const setSearchedMovies = (payload) => ({
    type: SET_SEARCHED_MOVIES,
    payload,
})

export const setMovieDetails = (payload) => ({
    type: SET_DETAILS,
    payload,
})
