import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import FilterMovies from './components/FilterMovies';
import DisplayBtnResults from './components/DisplayBtnResults';

require('dotenv').config();

function App() {
  const TMDB_KEY = process.env.REACT_APP_TMDB_API;
  const [movie, setMovie] = useState({
    results: [],
  });

  const showMoviesOnBtn = (e) => {
    // e.preventDefault();
    const buttonType = typeof e === 'string' ? e : e.target.id;

    axios(`https://api.themoviedb.org/3/movie/${buttonType}?api_key=${TMDB_KEY}&language=en-US&page=1`)
      .then((data) => {
        let results = data.data.results;
        setMovie((prevstate) => {
          return { ...prevstate, results: results };
        });
      })
      .catch((error) => console.log('Error:', error.message));
  };

  useEffect(() => showMoviesOnBtn('popular'), []);

  return (
    <div className='App'>
      <FilterMovies showMoviesOnBtn={showMoviesOnBtn} />
      <DisplayBtnResults results={movie.results} />
    </div>
  );
}

export default App;
