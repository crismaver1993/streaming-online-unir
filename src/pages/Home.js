import React from 'react';
import MovieCard from '../components/MovieCard';
import useFetchMovies from '../hooks/fetchMovies';
import { BASE_URL, MOVIES_LIST_ENDPOINT } from '../Config';
import '../css/Home.css';

function Home() {
  const { movies, loading, error } = useFetchMovies(`${BASE_URL}${MOVIES_LIST_ENDPOINT}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      <h1 className="home__title">Movie Catalog</h1>
      <div className="home__grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
