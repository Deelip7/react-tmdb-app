import React from 'react';

function DisplayMovieResult({ result }) {
  const isPosterUrlvalid = result.poster_path !== null ? `https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}` : require('./svgs/TMDB_LOGO.svg');

  return (
    <div className='card'>
      <img src={`${isPosterUrlvalid}`} className='card-poster' alt={`${result.title} Poster`}></img>
      <div className='card-release_date'>{result.release_date && result.release_date.split('-')[0]}</div>
      <div className='card-title'>
        <p>{result.title}</p>
      </div>
    </div>
  );
}

export default DisplayMovieResult;
