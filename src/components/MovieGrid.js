import React from 'react';
import MovieCard from './MovieCard';
import '../css/MovieGrid.css'; 

function MovieGrid({ filteredMovies }) {
  return (
    <div className="home__grid">
      {filteredMovies.length === 0 ? (
        <p>No se encontraron películas</p>
      ) : (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default MovieGrid;
