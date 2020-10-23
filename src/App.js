import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FilterMovies from './components/FilterMovies';
import DisplayMovieResults from './components/DisplayMovieResults';
import SearchMovies from './components/SearchMovies';

require('dotenv').config();

function App() {
  const TMDB_KEY = process.env.REACT_APP_TMDB_API;
  console.log(TMDB_KEY);
  const [movie, setMovie] = useState({
    searchTerm: '',
    results: [],
  });

  const showMoviesOnBtn = (e) => {
    const buttonType = typeof e === 'string' ? e : e.target.id;

    axios(`https://api.themoviedb.org/3/movie/${buttonType}?api_key=${TMDB_KEY}&language=en-US&page=1`)
      .then((data) => {
        let results = data.data.results;

        setMovie((prevState) => {
          return { ...prevState, results: results };
        });
      })
      .catch((error) => console.log('Error:', error.message));
  };

  const showMoviesOnSearch = (e) => {
    const searchQuery = e.target.value;
    if (e.key === 'Enter') {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`).then((data) => {
        let results = data.data.results;
        setMovie((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  useEffect(() => showMoviesOnBtn('popular'), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <FilterMovies showMoviesOnBtn={showMoviesOnBtn} />
      <SearchMovies showMoviesOnSearch={showMoviesOnSearch} />
      <DisplayMovieResults results={movie.results} />
    </div>
  );
}

export default App;
