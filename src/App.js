import axios from 'axios';
import React from 'react';
import './App.css';

require('dotenv').config();

function App() {
  const TMDB_KEY = process.env.REACT_APP_TMDB_API;

  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`).then((data) => {
    console.log(data.data);
  });

  return <div className='App'></div>;
}

export default App;
