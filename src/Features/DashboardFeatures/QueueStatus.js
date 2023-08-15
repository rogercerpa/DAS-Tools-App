import React from 'react';
import { useFetchData } from '../../api/fetchData';

const QueueStatus = () => {
  const { data } = useFetchData();
  const todayDate = new Date().toISOString().split('T')[0];

  const totalQuantity = data ? data.length : 0;
  const waitingOnRepTasks = data ? data.filter(item => item.Status === "Waiting on Rep") : [];
  const totalWaitingOnRep = waitingOnRepTasks.length;

  const requestedDateTasks = data
    ? data.filter(item => item['Requested Date'] <= todayDate)
    : [];
  const totalRequestedDate = requestedDateTasks.length;

  const controlsLeadTriageNotStartedTasks = data
    ? data.filter(item => item['Task Type'] === "Controls Lead Triage" && item.Status === "Not Started")
    : [];
  const totalControlsLeadTriageNotStarted = controlsLeadTriageNotStartedTasks.length;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">QueueStatus</h1>
      <div className='flex items-center ml-4 m-2'>
        <TaskStat title="Total Tasks in Queue" quantity={totalQuantity} />
        <TaskStat title="Total Tasks WOR" quantity={totalWaitingOnRep} />
        <TaskStat title="RD Today or Before" quantity={totalRequestedDate} />
        <TaskStat title="Triages Not Started" quantity={totalControlsLeadTriageNotStarted} />
      </div>
    </div>
  );
};

const TaskStat = ({ title, quantity }) => (
  <div className="ml-4 bg-slate-500 rounded p-1">
    <p className="text-lg font-semibold text-gray-900">{title}</p>
    <p className="text-center text-5xl font-bold text-gray-900">{quantity}</p>
  </div>
);

export default QueueStatus;


