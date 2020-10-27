import React from 'react';

function SearchMovies({ getUserSearchQuery, closeMovieDetails }) {
  return (
    <section className='search-container'>
      <img src={require('./svgs//TMDB_LOGO.svg')} alt='TMDB LOGO' onClick={closeMovieDetails} />
      <img src={require('./svgs/search.svg')} alt='search' className='search-icon' onClick={getUserSearchQuery} />
      <input type='text' name='searchMovie' placeholder='Search Movies...' onKeyPress={getUserSearchQuery} />
    </section>
  );
}

export default SearchMovies;
