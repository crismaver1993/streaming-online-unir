import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SearchBar.css'; 

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="home__search">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} 
      />
    </div>
  );
}

export default SearchBar;
