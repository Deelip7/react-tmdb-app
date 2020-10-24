import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FilterMovies from './components/FilterMovies';
import DisplayMovieResults from './components/DisplayMovieResults';
import SearchMovies from './components/SearchMovies';
import DisplayMovieDetails from './components/DisplayMovieDetails';

require('dotenv').config();

function App() {
  const TMDB_KEY = process.env.REACT_APP_TMDB_API;
  const [movie, setMovie] = useState({
    searchTerm: '',
    results: [],
    filterType: '',
  });

  const showMoviesOnBtn = (e) => {
    const buttonType = typeof e === 'string' ? e : e.target.className;

    axios(`https://api.themoviedb.org/3/movie/${buttonType}?api_key=${TMDB_KEY}&language=en-US&page=1`)
      .then((data) => {
        let results = data.data.results;

        setMovie((prevState) => {
          return { ...prevState, results: results, filterType: buttonType };
        });
      })
      .catch((error) => console.log('Error:', error.message));
  };

  const showMoviesOnSearch = (e) => {
    const searchQuery = e.target.value;
    if (e.key === 'Enter') {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
        .then((data) => {
          e.target.value = '';
          e.target.blur();
          let results = data.data.results;
          if (results.length > 0) {
            setMovie((prevState) => {
              return { ...prevState, results: results, filterType: searchQuery };
            });
          } else {
            alert('Movie Not Found');
          }
        })
        .catch((error) => console.log('Error:', error.message));
    }
  };

  const showMovieDetails = () => {
    const alertString = ['Movie Not Found'];
    setMovie((prevState) => {
      return { ...prevState, results: alertString };
    });
  };

  useEffect(() => showMoviesOnBtn('popular'), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <header>
        <SearchMovies showMoviesOnSearch={showMoviesOnSearch} />
      </header>
      <main>
        <aside>
          <FilterMovies showMoviesOnBtn={showMoviesOnBtn} />
        </aside>
        <section>
          <DisplayMovieResults results={movie.results} filterType={movie.filterType} />
        </section>
        <DisplayMovieDetails />
      </main>
    </div>
  );
}

export default App;
