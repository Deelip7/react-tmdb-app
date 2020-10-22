import React from 'react';
import DisplayBtnResult from './DisplayBtnResult';

function DisplayBtnResults({ results }) {
  return (
    <div className='card-container'>
      {results.map((result) => {
        return <DisplayBtnResult key={result.id} result={result} />;
      })}
    </div>
  );
}

export default DisplayBtnResults;
