import React from 'react';
import DisplayBtnResult from './DisplayBtnResult';

function DisplayBtnResults({ results }) {
  return (
    <div>
      {results.map((result) => {
        return <DisplayBtnResult key={result.id} result={result} />;
      })}
    </div>
  );
}

export default DisplayBtnResults;
