import React from 'react';

function FilterMovies({ showMoviesOnBtn }) {
  return (
    <div>
      <button onClick={showMoviesOnBtn} id='popular'>
        Popular Movies
      </button>
      <button onClick={showMoviesOnBtn} id='top_rated'>
        Top Rated
      </button>
      <button onClick={showMoviesOnBtn} id='now_playing'>
        Now Playing
      </button>
    </div>
  );
}

export default FilterMovies;
