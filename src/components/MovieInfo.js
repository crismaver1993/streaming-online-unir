import React from 'react';
import Reviews from '../components/MovieReview'; 

function Info({ movie }) {
  return (
    <div className="movie-detail__info">
      <h1 className="movie-detail__title">{movie.title}</h1>
      <p className="movie-detail__text">
        <strong>Sipnosis:</strong> {movie.synopsis}
      </p>
      <p className="movie-detail__text">
        <strong>Descripción:</strong> {movie.description}
      </p>
      <h3 className="movie-detail__subtitle">Reseñas:</h3>
      <Reviews reviews={movie.reviews} />
    </div>
  );
}

export default Info;
