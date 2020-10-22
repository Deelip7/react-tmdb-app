import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import PopularMovies from './components/PopularMovies';
import DisplayBtnResults from './components/DisplayBtnResults';

require('dotenv').config();

function App() {
  const TMDB_KEY = process.env.REACT_APP_TMDB_API;
  const [movie, setMovie] = useState({
    results: [],
  });

  const showPopularMovies = (e) => {
    e.preventDefault();
    const buttonType = e.target.id;
    axios(`https://api.themoviedb.org/3/movie/${buttonType}?api_key=${TMDB_KEY}&language=en-US&page=1`)
      .then((data) => {
        let results = data.data.results;
        setMovie((prevstate) => {
          return { ...prevstate, results: results };
        });
      })
      .catch((error) => console.log('Error:', error.message));
  };

  // const btnResults = (e) => {};

  return (
    <div className='App'>
      <PopularMovies showPopularMovies={showPopularMovies} />
      <DisplayBtnResults results={movie.results} />
    </div>
  );
}

// function App() {
//   const TMDB_KEY = process.env.REACT_APP_TMDB_API;
//   axios(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`).then((data) => {
//     console.log(data.data);
//   });

//   return <div className='App'></div>;
// }

export default App;
