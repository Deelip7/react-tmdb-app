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

  // Get data from api when user selects Popular/NowPlaying/TopRated button
  // Load Popular movie data when page loads
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

  // Get user search term from input field and pass it to showMoviesOnSearch()
  const getUserSearchQuery = (e) => {
    let searchQuery = '';
    if (e.target.className === 'search-icon') {
      searchQuery = e.target.nextElementSibling;
      showMoviesOnSearch(searchQuery, e);
    } else {
      searchQuery = e.target;
      showMoviesOnSearch(searchQuery, e);
    }
  };

  // Get data from api based on user search term.
  const showMoviesOnSearch = (searchQuery, e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      closeMovieDetails();
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${searchQuery.value}&page=1&include_adult=false`)
        .then((data) => {
          let results = data.data.results;
          if (results.length > 0) {
            setMovie((prevState) => {
              return { ...prevState, results: results, filterType: searchQuery.value };
            });
          } else {
            alertMsgModal('Movie Not Found');
          }
        })
        .catch(() => clearSearchField(e));
      clearSearchField(searchQuery);
    }
  };

  // Clear input field
  const clearSearchField = (e) => {
    e.value = '';
    e.blur();
  };

  //Get movie id when user clicks on card and pass it to showMovieDetails()
  const getMovieID = (e) => {
    let selectMovieId = '';
    if (e.target.parentNode.className === 'card-title') {
      //Card title
      selectMovieId = e.target.parentNode.parentNode.id;
    } else {
      //Card poster
      selectMovieId = e.target.parentNode.id;
    }
    showMovieDetails(selectMovieId);
  };

  // Get information about a movie from api based on movies id
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

  //Close <DisplayMovieDetails> div
  const closeMovieDetails = () => {
    setMovie((prevState) => {
      return { ...prevState, movieDetails: '' };
    });
  };

  // Show alert if user search term not found
  const alertMsgModal = () => {
    setMovie((prevState) => {
      return { ...prevState, alertMsgPosition: '40px' };
    });
    setTimeout(() => {
      setMovie((prevState) => {
        return { ...prevState, alertMsgPosition: '-600px' };
      });
    }, 2000);
  };

  // Load Popular movie when page loads
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
          {/* Dont call <DisplayMovieDetails> if movie.movieDetails is null*/}
          {typeof movie.movieDetails === 'object' ? <DisplayMovieDetails movieDetails={movie.movieDetails} closeMovieDetails={closeMovieDetails} /> : false}
        </section>
        <Alert alertMsgModal={movie.alertMsgPosition} />
      </main>
    </div>
  );
}

export default App;
