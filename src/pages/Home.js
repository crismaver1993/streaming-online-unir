/*import React from 'react';
import MovieCard from '../components/MovieCard';
import useFetchMovies from '../hooks/fetchMovies';
import { BASE_URL, MOVIES_LIST_ENDPOINT } from '../Config';
import '../css/Home.css';

function Home() {
  const { movies, loading, error } = useFetchMovies(`${BASE_URL}${MOVIES_LIST_ENDPOINT}`);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      <h1 className="home__title">Catálogo de películas</h1>
      <div className="home__grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
*/

import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import useFetchMovies from '../hooks/fetchMovies';
import { BASE_URL, MOVIES_LIST_ENDPOINT } from '../Config';
import '../css/Home.css';

function Home() {
  const { movies, loading, error } = useFetchMovies(`${BASE_URL}${MOVIES_LIST_ENDPOINT}`);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar las películas según el término de búsqueda
  const filteredMovies = movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const search = searchTerm.toLowerCase();

    // Filtrar por título, director, y género
    return (
      movieTitle.includes(search) ||
      movie.director.toLowerCase().includes(search) ||
      movie.genre.some(g => g.toLowerCase().includes(search)) // Filtra por cualquier género
    );
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      <h1 className="home__title">Catálogo de películas</h1>

      {/* Campo de búsqueda */}
      <div className="home__search">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} // Actualiza el estado al escribir
        />
      </div>

      <div className="home__grid">
        {filteredMovies.length === 0 ? (
          <p>No se encontraron películas</p>
        ) : (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
