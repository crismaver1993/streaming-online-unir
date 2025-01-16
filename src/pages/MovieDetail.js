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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!loading && !error && !movie) return <p>Movie not found</p>;

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
          onClick={() => window.open(movie.trailer, '_blank')}
        >
          Watch Trailer
        </button>
      </div>
      <div className="movie-detail__info">
        <h1 className="movie-detail__title">{movie.title}</h1>
        <p className="movie-detail__text"><strong>Synopsis:</strong> {movie.synopsis}</p>
        <p className="movie-detail__text"><strong>Description:</strong> {movie.description}</p>
        <h3 className="movie-detail__subtitle">Reviews:</h3>
        <ul className="movie-detail__reviews">
          {movie.reviews.map((review, index) => (
            <li key={index} className="movie-detail__review">
              <strong>{review.author}</strong>: {review.comment} ({review.rating}/10)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetail;
