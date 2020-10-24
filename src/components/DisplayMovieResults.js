import React from 'react';
import DisplayBtnResult from './DisplayMovieResult';

function DisplayMovieResults({ results, filterType }) {
  let filterHeader = '';
  console.log(filterType);

  if (filterType === 'popular') {
    filterHeader = 'Popular Movies';
  } else if (filterType === 'now_playing') {
    filterHeader = 'Now Playing';
  } else if (filterType === 'top_rated') {
    filterHeader = 'Top Rated Movies';
  } else {
    filterHeader = `Results for ${filterType}`;
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
