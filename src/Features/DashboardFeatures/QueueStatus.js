import React from 'react';
import SimpleBarChart from "../../Components/Charts/SimpleBarChart"
import { useFetchData } from '../../api/fetchData';

const QueueStatus = () => {
  const { data, isLoading } = useFetchData();
   // Calculate today's date in the format yyyy-mm-dd
   const todayDate = new Date().toISOString().split('T')[0];

  const totalQuantity = data ? data.length : 0;
  const waitingOnRepTasks = data ? data.filter(item => item.Status === "Waiting on Rep") : [];
  const totalWaitingOnRep = waitingOnRepTasks.length;

  const RequestedDateTasks = data
  ? data.filter(item => item['Requested Date'] <= todayDate)
  : [];
const totalRequestedDate = RequestedDateTasks.length;

  return (
    <div>
      <div className="p-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">QueueStatus</h1>
      </div>
      <div className='flex items-center'>
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-900">Total Tasks in Queue</p>
          <p className="text-3xl font-bold text-gray-900">{totalQuantity}</p>
          <p className="text-lg font-semibold text-gray-900">Total Tasks WOR</p>
          <p className="text-3xl font-bold text-gray-900">{totalWaitingOnRep}</p>
          <p className="text-lg font-semibold text-gray-900">RD Today or Before</p>
          <p className="text-3xl font-bold text-gray-900">{totalRequestedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;

