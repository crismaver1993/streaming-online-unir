import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovieDetail from '../hooks/fetchDetail';
import { BASE_URL, MOVIE_DETAIL_ENDPOINT } from '../Config';
import Poster from '../components/MoviePoster';  
import Info from '../components/MovieInfo';       
import Footer from '../components/Footer';  
import '../css/MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const movieUrl = `${BASE_URL}${MOVIE_DETAIL_ENDPOINT}/${id}`;

  const { data: movie, loading, error } = useFetchMovieDetail(movieUrl);
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
      <Poster poster={movie.poster} title={movie.title} /> 
      <Info movie={movie} /> 
      <Footer /> 
    </div>
  );
}

export default MovieDetail;
