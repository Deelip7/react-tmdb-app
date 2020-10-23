import React from 'react';
import DisplayBtnResult from './DisplayMovieResult';

function DisplayMovieResults({ results, filterType }) {
  let filterHeader = '';

  if (filterType === 'popular') {
    filterHeader = 'Popular Movies';
  } else if (filterType === 'now_playing') {
    filterHeader = 'Now Playing';
  } else {
    filterHeader = 'Top Rated Movies';
  }

  return (
    <div className='card-container'>
      <h1>{filterHeader}</h1>
      {results.map((result) => {
        return <DisplayBtnResult key={result.id} result={result} />;
      })}
    </div>
  );
}

export default DisplayMovieResults;
