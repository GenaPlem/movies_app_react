import {SET_POPULAR_MOVIES, SET_SEARCHED_MOVIES, SET_DETAILS} from "./types";

const initialState = {
    popular: [],
    searched: [],
    details: {},
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popular: action.payload,
            }
        case SET_SEARCHED_MOVIES:
            return {
                ...state,
                searched: action.payload,
            }
        case SET_DETAILS:
            return {
                ...state,
                details: action.payload,
            }
        default:
            return state;
    }
}

export default movies;