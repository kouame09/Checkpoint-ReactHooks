import React from 'react';

const FilmFilter = ({ onTitleFilter, onCategoryFilter }) => {
  const handleTitleChange = (event) => {
    // Récupérer la valeur du titre pour filtrer
    const title = event.target.value;
    onTitleFilter(title);
  };

  const handleCategoryChange = (event) => {
    // Récupérer la valeur de la catégorie pour filtrer
    const category = event.target.value;
    onCategoryFilter(category);
  };

  return (
    <div className="film-filter">
      <input type="text" placeholder="Filtrer par nom" onChange={handleTitleChange} />
      <select onChange={handleCategoryChange}>
        <option value="">Afficher tout</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comédie</option>
        <option value="Drama">Drame</option>
        {/* Ajoutez d'autres catégories au besoin */}
      </select>
    </div>
  );
};

export default FilmFilter;
