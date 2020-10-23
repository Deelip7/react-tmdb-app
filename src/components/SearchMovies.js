import React from 'react';

function SearchMovies({ getUserSearchTerm, showMoviesOnSearch }) {
  return (
    <section className='search-container'>
      <img src={require('./TMDB_LOGO.svg')} alt='TMDB LOGO' />
      <img src={require('./search.svg')} alt='search' className='search-icon' />
      <input type='text' name='searchMovie' placeholder='Search Movies...' onKeyPress={showMoviesOnSearch} />
      {/* <input type='text' name='searchMovie' placeholder='Search Movies' onChange={getUserSearchTerm} onKeyPress={showMoviesOnSearch} /> */}
    </section>
  );
}

export default SearchMovies;
