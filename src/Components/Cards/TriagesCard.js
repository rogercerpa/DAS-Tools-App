import React from 'react';

function TriagesCard({ totalTriagesTasks }) {
  const getStatusTasks = (status) => {
    return totalTriagesTasks.filter(task => task.status === status);
  };

  const renderTable = (statusTasks) => (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {/* Add your column headers here */}
          <th className="w-1/3 px-4 py-2">Task Name</th>
          <th className="w-1/3 px-4 py-2">Status</th>
          {/* Add more columns as required */}
        </tr>
      </thead>
      <tbody>
        {statusTasks.map(task => (
          <tr key={task.id}>
            {/* Map your task properties to columns here */}
            <td className="border px-4 py-2">{task.name}</td>
            <td className="border px-4 py-2">{task.status}</td>
            {/* Add more columns as required */}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-2">Waiting on Rep</h2>
      {renderTable(getStatusTasks('Waiting on Rep'))}

      <h2 className="text-xl font-bold mb-2">Not Started</h2>
      {renderTable(getStatusTasks('Not Started'))}

      <h2 className="text-xl font-bold mb-2">In Progress</h2>
      {renderTable(getStatusTasks('In Progress'))}
    </div>
  );
}

export default TriagesCard;
