export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const GET_MOVIES = 'GET_MOVIES';

export function createAddMovie(movie, list) {
  return {
    type: ADD_MOVIE,
    movie,
    list
  }
}

export function createDeleteMovie(movieID) {
  return {
    type: DELETE_MOVIE,
    movieID
  }
}

export const SET_DATA = 'SET_DATA';
export function setData(data) {
  return {
    type: SET_DATA,
    data
  }
}

export const SET_LOADING = 'SET_LOADING'
export function setLoading(value) {
  return {
    type: SET_LOADING,
    value
  }
}