import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovieDetail from '../hooks/fetchDetail';
import { BASE_URL, MOVIE_DETAIL_ENDPOINT } from '../Config';
import '../css/MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const movieUrl = `${BASE_URL}${MOVIE_DETAIL_ENDPOINT}/${id}`;

  // se ejecuta cuando cambie el id
  const { data: movie, loading, error } = 
  useFetchMovieDetail(movieUrl);

  // Previene que la URL cambie cuando el id realmente cambie
  const [prevId, setPrevId] = useState(null);
  useEffect(() => {
    if (id !== prevId) {
      setPrevId(id);
    }
  }, [id, prevId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!loading && !error && !movie) return <p>Película no encontrada</p>;

  return (
    <div className="movie-detail">
      <div className="movie-detail__poster-container">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-detail__poster" 
        />
        <button 
          className="movie-detail__trailer-button"
          onClick={() => window.open(movie.trailerUrl, '_blank')}
        >
          Ver tráiler
        </button>
      </div>
      <div className="movie-detail__info">
        <h1 className="movie-detail__title">{movie.title}</h1>
        <p className="movie-detail__text"><strong>Sipnosis:</strong> {movie.synopsis}</p>
        <p className="movie-detail__text"><strong>Descripción:</strong> {movie.description}</p>
        <h3 className="movie-detail__subtitle">Reseñas:</h3>
        <ul className="movie-detail__reviews">
          {Array.isArray(movie.reviews) && movie.reviews.length > 0 ? (
            movie.reviews.map((review, index) => (
              <li key={index} className="movie-detail__review">
                <strong>{review.author}</strong>: {review.comment} ({review.rating}/10)
              </li>
            ))
          ) : (
            <li>Sin reseñas</li>
          )}
        </ul>
      </div>
    </div>
  );
  
}

export default MovieDetail;
