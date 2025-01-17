import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-card__image" />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__year">{movie.year}</p>
        <Link to={`/movie/${movie.id}`} className="movie-card__link">Ver detalles</Link>
        <Link to={`/rent/${movie.id}`} className="btn-disabled ">Rentar</Link>
        <Link to={`/buy/${movie.id}`} className="btn-disabled ">Comprar</Link>
      </div>
    </div>
  );
}

export default MovieCard;
