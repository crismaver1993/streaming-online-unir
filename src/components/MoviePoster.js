import React from 'react';
import '../css/MoviePoster.css'; 

function MoviePoster({ poster, title }) {
  return <img src={poster} alt={title} className="movie-detail__poster" />;
}

export default MoviePoster;
