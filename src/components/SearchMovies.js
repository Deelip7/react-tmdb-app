import React from 'react';

function SearchMovies({ showMoviesOnSearch }) {
  return (
    <section className='search-container'>
      <img src={require('./svgs//TMDB_LOGO.svg')} alt='TMDB LOGO' />
      <img src={require('./svgs/search.svg')} alt='search' className='search-icon' onClick={showMoviesOnSearch} />
      <input type='text' name='searchMovie' placeholder='Search Movies...' onKeyPress={showMoviesOnSearch} />
    </section>
  );
}

export default SearchMovies;
