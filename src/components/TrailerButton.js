import React from 'react';
import '../css/TrailerButton.css'; 

function TrailerButton({ trailerUrl }) {
  return (
    <button 
      onClick={() => window.open(trailerUrl, '_blank')}
      className="movie-detail__trailer-button"
    >
      Ver tráiler
    </button>
  );
}

export default TrailerButton;
