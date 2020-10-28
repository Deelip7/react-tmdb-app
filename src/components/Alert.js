import React from 'react';

function Alert({ alertMsgModal }) {
  return (
    <div className='alertmsg' style={{ right: `${alertMsgModal}` }}>
      Movie not found
    </div>
  );
}

export default Alert;
