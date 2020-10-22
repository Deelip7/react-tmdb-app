import React from 'react';

function PopularMovies({ showPopularMovies }) {
  return (
    <div>
      <button onClick={showPopularMovies} id='popular'>
        Popular Movies
      </button>
      <button onClick={showPopularMovies} id='top_rated'>
        Top Rated
      </button>
      <button onClick={showPopularMovies} id='now_playing'>
        Now Playing
      </button>
    </div>
  );
}

export default PopularMovies;
