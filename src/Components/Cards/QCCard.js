import React from 'react';

function QCCard({ totalQCTasks}) {
  const getStatusTasks = (status) => {
    return totalQCTasks.filter(task => task.Status === status);
  };

  const renderTable = (statusTasks) => (
    
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="w-1/3 px-4 py-2">Task Name</th>
          <th className="w-1/3 px-4 py-2">Assigned to</th>
          {/* You can add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {statusTasks.map(task => (
          <tr key={task.id}>
            <td className="border px-4 py-2">{task['Job Name']}</td>
            <td className="border px-4 py-2">{task['Assigned To']}</td>
            {/* You can add more columns if needed */}
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
      <h2 className="text-xl font-bold mb-2">Ready For QC</h2>
      {renderTable(getStatusTasks('Ready For QC'))}
    </div>
  );
}

export default QCCard;