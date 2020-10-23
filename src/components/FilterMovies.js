import React from 'react';

function FilterMovies({ showMoviesOnBtn }) {
  return (
    <div className='navlink-container'>
      <button onClick={showMoviesOnBtn} className='popular' id='filter-btn'>
        <img src={require('./trending.svg')} className='popular' alt='' />
        Popular
      </button>
      <button onClick={showMoviesOnBtn} className='top_rated' id='filter-btn'>
        <img src={require('./star.svg')} className='top_rated' alt='' />
        Top Rated
      </button>
      <button onClick={showMoviesOnBtn} className='now_playing' id='filter-btn'>
        <img src={require('./play.svg')} className='now_playing' alt='' />
        Now Playing
      </button>
    </div>
  );
}

export default FilterMovies;
