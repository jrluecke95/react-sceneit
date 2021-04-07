import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createAddMovie } from '../redux/actions';


const MovieCard = (props) => {
  const favoriteLists = useSelector((state) => state.movieReducer.ADD_MOVIES)
  console.log(favoriteLists)
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(createAddMovie(props.search, favoriteLists))
  }

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteLists)
  )}, [favoriteLists]);

  return (
    <div className="movieCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.search.Poster} />
        <Card.Body>
          <Card.Title>{props.search.Title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>Add to Favorites</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCard
