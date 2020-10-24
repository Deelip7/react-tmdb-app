import React from 'react';

function AlertBox({ showAlertMsg }) {
  return (
    <div>
      <div className='alertmsg' style={{ padding: '10px' }}>
        {showAlertMsg}
      </div>
    </div>
  );
}

export default AlertBox;
