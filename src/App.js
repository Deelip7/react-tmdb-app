import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FilterMovies from './components/FilterMovies';
import DisplayMovieResults from './components/DisplayMovieResults';
import SearchMovies from './components/SearchMovies';
import DisplayMovieDetails from './components/DisplayMovieDetails';
import Alert from './components/Alert';

require('dotenv').config();

function App() {
  const TMDB_KEY = process.env.REACT_APP_TMDB_API;
  const [movie, setMovie] = useState({
    results: [],
    filterType: '',
    movieDetails: '',
    alertMsgPosition: '',
  });

  const showMoviesOnBtn = (e) => {
    const buttonType = typeof e === 'string' ? e : e.target.className;
    closeMovieDetails();

    axios(`https://api.themoviedb.org/3/movie/${buttonType}?api_key=${TMDB_KEY}&language=en-US&page=1`)
      .then((data) => {
        let results = data.data.results;
        setMovie((prevState) => {
          return { ...prevState, results: results, filterType: buttonType };
        });
      })
      .catch((error) => console.log('Error:', error.message));
  };

  const getUserSearchQuery = (e) => {
    let searchQuery = '';
    if (e.target.className === 'search-icon') {
      searchQuery = e.target.nextElementSibling.value;
      showMoviesOnSearch(searchQuery, e);
    } else {
      searchQuery = e.target.value;
      showMoviesOnSearch(searchQuery, e);
    }
  };

  const showMoviesOnSearch = (searchQuery, e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      closeMovieDetails();
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
        .then((data) => {
          let results = data.data.results;
          if (results.length > 0) {
            setMovie((prevState) => {
              return { ...prevState, results: results, filterType: searchQuery };
            });
          } else {
            alertMsgModel('Movie Not Found');
          }
        })
        .catch(() => clearSearchField());
    }
  };

  const clearSearchField = (e) => {
    e.target.value = '';
    e.target.nextElementSibling.value = '';
    e.target.blur();
  };

  const getMovieID = (e) => {
    let selectMovieId = '';
    if (e.target.parentNode.className === 'card-title') {
      selectMovieId = e.target.parentNode.parentNode.id;
    } else {
      selectMovieId = e.target.parentNode.id;
    }
    showMovieDetails(selectMovieId);
  };

  const showMovieDetails = (movieID) => {
    axios(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_KEY}&language=en-US`)
      .then((data) => {
        const movieDetails = data.data;
        setMovie((prevState) => {
          return { ...prevState, movieDetails: movieDetails };
        });
      })
      .catch((error) => console.log('Error', error.message));
  };

  const closeMovieDetails = () => {
    setMovie((prevState) => {
      return { ...prevState, movieDetails: '' };
    });
  };

  const alertMsgModel = () => {
    setMovie((prevState) => {
      return { ...prevState, alertMsgPosition: '40px' };
    });
    setTimeout(() => {
      setMovie((prevState) => {
        return { ...prevState, alertMsgPosition: '-500px' };
      });
    }, 2000);
  };

  useEffect(() => showMoviesOnBtn('popular'), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <header>
        <SearchMovies getUserSearchQuery={getUserSearchQuery} closeMovieDetails={closeMovieDetails} />
      </header>
      <main>
        <aside>
          <FilterMovies showMoviesOnBtn={showMoviesOnBtn} closeMovieDetails={closeMovieDetails} />
        </aside>
        <section>
          <DisplayMovieResults results={movie.results} filterType={movie.filterType} getMovieID={getMovieID} />
          {typeof movie.movieDetails === 'object' ? <DisplayMovieDetails movieDetails={movie.movieDetails} closeMovieDetails={closeMovieDetails} /> : false}
        </section>
        <Alert alertMsgModel={movie.alertMsgPosition} />
      </main>
    </div>
  );
}

export default App;
