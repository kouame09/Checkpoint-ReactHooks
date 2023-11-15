import React from 'react';

const FilmCard = ({ title, description, posterURL, category }) => {
  return (
    <div className="film-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Catégorie: {category}</p>
    </div>
  );
};

export default FilmCard;
