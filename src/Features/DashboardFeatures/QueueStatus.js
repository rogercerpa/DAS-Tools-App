import React from 'react';
import SimpleBarChart from "../../Components/Charts/SimpleBarChart"

const QueueStatus = () => {

  return (
    <div>
    <div className="bg-blue-100 p-4">
      <h1>QueueStatus</h1>
    </div>
    <div className='flex'>
    <div><SimpleBarChart /></div>
    <div><SimpleBarChart /></div>
    <div><SimpleBarChart /></div>
    </div>
    </div>
  );
};

export default QueueStatus;