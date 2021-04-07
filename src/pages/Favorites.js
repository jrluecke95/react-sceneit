import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const favorites = useSelector((state) => state.movieReducer.ADD_MOVIES)
  console.log(favorites)
  return (
    <div>
      {favorites.map(movie => {
        return <MovieCard search={movie} key={movie.imdbID} />
      })
      }
    </div>
  )
}

export default Favorites
