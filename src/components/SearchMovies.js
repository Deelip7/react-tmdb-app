import React from 'react';

function SearchMovies({ getUserSearchTerm, showMoviesOnSearch }) {
  return (
    <section className='search-container'>
      <img src='/static/media/TMDB_LOGO.6602ffb9.svg' alt='' />
      <input type='text' name='searchMovie' placeholder='Search Movies...' onKeyPress={showMoviesOnSearch} />
      {/* <input type='text' name='searchMovie' placeholder='Search Movies' onChange={getUserSearchTerm} onKeyPress={showMoviesOnSearch} /> */}
    </section>
  );
}

export default SearchMovies;
