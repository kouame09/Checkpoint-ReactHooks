import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './Components/FilmList';
import FilmFilter from './Components/FilmFilter';
import FilmAdd from './Components/FilmAdd';

function App() {
  const initialFilms = [
    // Liste de films initiale...
  ];

  const [films, setFilms] = useState(initialFilms);
  const [filteredFilms, setFilteredFilms] = useState(initialFilms);

  useEffect(() => {
    setFilteredFilms(films);
  }, [films]);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
    setFilteredFilms([...films, newFilm]);
  };

  const filterByTitle = (title) => {
    const filtered = films.filter((film) =>
      film.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredFilms(filtered);
  };

  const filterByCategory = (category) => {
    if (category === '') {
      setFilteredFilms(films); // Afficher tous les films lorsque la catégorie est vide
    } else {
      const filtered = films.filter(
        (film) => film.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredFilms(filtered);
    }
  };

  const resetFilters = () => {
    setFilteredFilms(films);
  };

  return (
    <div className="App">
      <h1>IvoireFlix</h1>
      <FilmAdd onAddFilm={addFilm} />
      <FilmFilter
        onTitleFilter={filterByTitle}
        onCategoryFilter={filterByCategory}
        onResetFilters={resetFilters}
      />
      <FilmList films={filteredFilms} />
    </div>
  );
}

export default App;
