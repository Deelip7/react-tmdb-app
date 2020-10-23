import React from 'react';

function SearchMovies({ getUserSearchTerm, showMoviesOnSearch }) {
  return (
    <div>
      <section className='search-container'>
        <input type='text' name='searchMovie' placeholder='Search Movies' onKeyPress={showMoviesOnSearch} />
        {/* <input type='text' name='searchMovie' placeholder='Search Movies' onChange={getUserSearchTerm} onKeyPress={showMoviesOnSearch} /> */}
      </section>
    </div>
  );
}

export default SearchMovies;
