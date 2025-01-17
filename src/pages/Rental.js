import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Config';

const RentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.movie));
  }, [id]);

  const handleRent = () => {
    const alquilerData = {
      movieId: id,
      userId: 1,  // simula usuario  logueado
      fechaAlquiler: new Date().toISOString(),
      fechaExpiracion: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),  // 1 día después
    };

    fetch(`${BASE_URL}/rent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alquilerData),
    })
      .then(() => navigate(`/movie/${id}`))  // Redirigir a la página de detalles de la película
      .catch((error) => console.error("Error renting movie:", error));
  };

  if (!movie) return <p>Cargando detalles...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <button onClick={handleRent}>Rent for {movie.price} MXN</button>
    </div>
  );
};

export default RentalPage;
