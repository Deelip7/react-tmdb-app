import React from 'react';

function Alert({ alertMsgModel }) {
  return (
    <div className='alertmsg' style={{ right: `${alertMsgModel}` }}>
      Movie not found
    </div>
  );
}

export default Alert;
