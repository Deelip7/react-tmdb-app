import React from 'react';
import DisplayBtnResult from './DisplayMovieResult';

function DisplayMovieResults({ results }) {
  return (
    <div className='card-container'>
      {results.map((result) => {
        return <DisplayBtnResult key={result.id} result={result} />;
      })}
    </div>
  );
}

export default DisplayMovieResults;
