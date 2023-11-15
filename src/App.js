import React, { useState } from 'react';
import './App.css';
import FilmList from './Components/FilmList';
import FilmFilter from './Components/FilmFilter';
import FilmAdd from './Components/FilmAdd';

function App() {
  const [films, setFilms] = useState([
    {
      title: 'Prison Break',
      description: 'Film de Mickel Scofield',
      posterURL: 'https://m.media-amazon.com/images/S/pv-target-images/715cf83eecae70af83c4c354a341363cf9177a7940d1893cdba2ce8c7ab29aa4.jpg',
      category: 'Action',
    },
    // Ajoutez d'autres films initiaux au besoin...
  ]);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  const filterByTitle = (title) => {
    // Filtrer les films par titre
    // Mettre à jour la liste affichée en fonction du titre
  };

  const filterByCategory = (category) => {
    // Filtrer les films par catégorie
    // Mettre à jour la liste affichée en fonction de la catégorie
  };

  return (
    <div className="App">
      <h1>Cinema App</h1>
      <FilmAdd onAddFilm={addFilm} />
      <FilmFilter onTitleFilter={filterByTitle} onCategoryFilter={filterByCategory} />
      <FilmList films={films} />
    </div>
  );
}

export default App;
