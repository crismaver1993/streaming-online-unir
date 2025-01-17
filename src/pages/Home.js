import React, { useState } from 'react';
import MovieGrid from '../components/MovieGrid';   
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';    
import useFetchMovies from '../hooks/fetchMovies';
import { BASE_URL, MOVIES_LIST_ENDPOINT } from '../Config';
import '../css/Home.css';

function Home() {
  const { movies, loading, error } = useFetchMovies(`${BASE_URL}${MOVIES_LIST_ENDPOINT}`);
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const search = searchTerm.toLowerCase();

    return (
      movieTitle.includes(search) ||
      movie.director.toLowerCase().includes(search) ||
      movie.genre.some(g => g.toLowerCase().includes(search))
    );
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      <h1 className="home__title">Catálogo de películas</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieGrid filteredMovies={filteredMovies} />
      <Footer />
    </div>
  );
}

export default Home;
