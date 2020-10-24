import React from 'react';

function DisplayMovieDetails({ movieDetails, closeMovieDetails }) {
  let isPosterUrlvalid = movieDetails.poster_path !== null ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}` : require('./svgs/TMDB_LOGO2.svg');

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
        <div className='movieDetail-genres'>
          {movieDetails.genres.map((e) => {
            console.log(e.name);
            return `${e.name}  `;
          })}
        </div>

        <div>{`Release date: ${movieDetails.release_date}`}</div>
        <div>{`${movieDetails.runtime} min`}</div>
        <div>
          <a href={`${movieDetails.homepage}`}>{`Home Page`}</a>
        </div>
        <div className='movieDetail-overview'>{movieDetails.overview}</div>
      </div>
    </div>
  );
}

export default DisplayMovieDetails;
