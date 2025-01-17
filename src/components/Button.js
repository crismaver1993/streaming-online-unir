import React from 'react';
import '../css/Button.css';

function Button({ text, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
