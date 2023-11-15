import React, { useState } from 'react';

const FilmAdd = ({ onAddFilm }) => {
  const [newFilm, setNewFilm] = useState({
    title: '',
    description: '',
    posterURL: '',
    category: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFilm({ ...newFilm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFilm(newFilm);
    setNewFilm({ title: '', description: '', posterURL: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="film-add">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={newFilm.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newFilm.description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Poster URL"
        name="posterURL"
        value={newFilm.posterURL}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={newFilm.category}
        onChange={handleChange}
      />
      <button type="submit">Add Film</button>
    </form>
  );
};

export default FilmAdd;
