import React from 'react';

function FilterMovies({ showMoviesOnBtn }) {
  return (
    <div className='navlink-container'>
      <button onClick={showMoviesOnBtn} id='popular' className='filter-btn'>
        Popular
      </button>
      <button onClick={showMoviesOnBtn} id='top_rated' className='filter-btn'>
        Top Rated
      </button>
      <button onClick={showMoviesOnBtn} id='now_playing' className='filter-btn'>
        Now Playing
      </button>
    </div>
  );
}

export default FilterMovies;
