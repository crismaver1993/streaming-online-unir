import React from 'react';
import '../css/ErrorMessage.css';

function ErrorMessage({ error }) {
  return <p className="error-message">Error: {error}</p>;
}

export default ErrorMessage;
