import React from 'react';
import SimpleBarChart from "../../Components/Charts/SimpleBarChart"

const QueueStatus = () => {

  return (
    <div>
    <div className="p-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">QueueStatus</h1>
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