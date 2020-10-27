import React from 'react';
import DisplayBtnResult from './DisplayMovieResult';

function DisplayMovieResults({ results, filterType, getMovieID }) {
  let filterHeader = '';

  switch (filterType) {
    case 'popular':
      filterHeader = 'Popular Movies';
      break;
    case 'now_playing':
      filterHeader = 'Now Playing';
      break;
    case 'top_rated':
      filterHeader = 'Top Rated Movies';
      break;
    default:
      filterHeader = `Results for ${filterType}`;
      break;
  }

  return (
    <div className='card-container'>
      <h1>{filterHeader}</h1>
      {results.map((result) => {
        return <DisplayBtnResult key={result.id} result={result} getMovieID={getMovieID} />;
      })}
    </div>
  );
}

export default DisplayMovieResults;
