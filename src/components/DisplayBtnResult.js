import React from 'react';

function DisplayBtnResult({ result }) {
  //   const posterUrl = 'https://image.tmdb.org/t/p/w1280/';
  const posterUrl =
    result.poster_path !== null
      ? `https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`
      : `https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`;
  console.log(posterUrl);

  return (
    <div className='card'>
      <img src={`${posterUrl}`} className='card-poster'></img>
      <div className='card-release_date'>{result.release_date.split('-')[0]}</div>
      <div className='card-title'>{result.title}</div>
    </div>
  );
}

export default DisplayBtnResult;
