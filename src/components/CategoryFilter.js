import React from 'react';
import '../css/CategoryFilter.css';

function CategoryFilter({ categories, onSelectCategory }) {
  return (
    <div className="category-filter">
      <label>Filtrar por categoría:</label>
      <select onChange={e => onSelectCategory(e.target.value)}>
        <option value="">Todas</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
