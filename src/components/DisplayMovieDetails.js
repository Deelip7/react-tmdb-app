import React from 'react';

function DisplayMovieDetails({ movieDetails, closeMovieDetails }) {
  let isPosterUrlvalid = movieDetails.poster_path !== null ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}` : require('./svgs/TMDB_LOGO.svg');

  return (
    <div className='movieDetail-container'>
      <div onClick={closeMovieDetails} className='movieDetail-close'>
        <span>X</span>
      </div>
      <div>
        <img src={`${isPosterUrlvalid}`} className='movieDetail-poster' alt={`${movieDetails.title} Poster`}></img>
      </div>
      <div className='movieDetail'>
        <div className='movieDetail-title'>{movieDetails.title}</div>
        <div className='movieDetail-overview'>{movieDetails.overview}</div>
      </div>
    </div>
  );
}

export default DisplayMovieDetails;
