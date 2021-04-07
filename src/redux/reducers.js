import { combineReducers } from "redux";
import { ADD_MOVIE, DELETE_MOVIE, SET_DATA, SET_LOADING } from "./actions";

const defaultState = {
  ADD_MOVIES: []
}

export function movieReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        ADD_MOVIES: [...action.list, action.movie]
      }
    case DELETE_MOVIE:
      return state.ADD_MOVIE.filter(favorite => 
        favorite.imdbID !== action.movieID
      )
    default:
      return state;
  }
}

export function dataReducer(state = [], action) {
  switch (action.type) {
    case SET_DATA:
      return action.data
    default:
      return state
  }
}

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.value
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  movieReducer:movieReducer,
  loading: loadingReducer,
  data: dataReducer
})