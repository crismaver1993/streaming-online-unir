import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Config';

const PurchasePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // info de película
    fetch(`${BASE_URL}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.movie));
  }, [id]);

  const handlePurchase = () => {
    
    const purchaseData = {
      movieId: id,
      userId: 1,  // Asumiendo que el usuario está logueado
      fechaCompra: new Date().toISOString(),
    };

    // guardar en db
    fetch(`${BASE_URL}/buy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchaseData),
    })
      .then(() => navigate(`/movie/${id}`))  // redirigir a la página de detalles 
      .catch((error) => console.error("Error purchasing movie:", error));
  };

  if (!movie) return <p>Cargando detalles...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <button onClick={handlePurchase}>Comprar por {movie.price} MXN</button>
    </div>
  );
};

export default PurchasePage;
