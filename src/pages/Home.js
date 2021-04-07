import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import '../index.css';

const Home = () => {
  const searchMovies = useSelector((state) => state.data)
  const loading = useSelector((state) => state.value)
  console.log(searchMovies)
  
  let movieCard;
  if (searchMovies.length > 0) {
    movieCard = searchMovies?.map((movie) =>  {
      return <MovieCard search={movie} key={movie.imdbID}/>
    })
  }

  return (
    <div className="movieContainer">
      { loading ? (
        <h1>loading...</h1>
      ) : (
        movieCard
      )}
    </div>
  )
}

export default Home