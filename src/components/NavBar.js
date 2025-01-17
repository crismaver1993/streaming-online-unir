import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__logo">MexFlix</div>
      <ul className="nav__links">
        <li className="nav__item"><Link to="/" className="nav__link">Inicio</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;