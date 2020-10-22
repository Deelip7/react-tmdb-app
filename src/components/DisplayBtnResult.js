import React from 'react';

function DisplayBtnResult({ result }) {
  console.log(result);
  return <div>{result.original_title}</div>;
}

export default DisplayBtnResult;
