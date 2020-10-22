import React from 'react';

function DisplayBtnResult({ result }) {
  const posterUrl = 'https://image.tmdb.org/t/p/w1280/';
  console.log(result);
  return (
    <div className='card'>
      <div className='card-title'>{result.title}</div>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`} className='card-poster'></img>
    </div>
  );
}

export default DisplayBtnResult;
