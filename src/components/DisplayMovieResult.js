import React from 'react';

function DisplayMovieResult({ result }) {
  //   const posterUrl = 'https://image.tmdb.org/t/p/w1280/';
  const isPosterUrlvalid = result.poster_path !== null ? `https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}` : require('./TMDB_LOGO.svg');

  return (
    <div className='card'>
      <img src={`${isPosterUrlvalid}`} className='card-poster' alt={`${result.title} Poster`}></img>
      <div className='card-release_date'>{result.release_date.split('-')[0]}</div>
      <div className='card-title'>{result.title}</div>
    </div>
  );
}

export default DisplayMovieResult;