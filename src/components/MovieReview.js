import React from 'react';
import '../css/MovieReview.css';

function MovieReviews({ reviews }) {
  return (
    <div className="movie-reviews">
      <h3>Reseñas:</h3>
      <ul>
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.author}</strong>: {review.comment} ({review.rating}/10)
            </li>
          ))
        ) : (
          <li>Sin reseñas</li>
        )}
      </ul>
    </div>
  );
}

export default MovieReviews;
