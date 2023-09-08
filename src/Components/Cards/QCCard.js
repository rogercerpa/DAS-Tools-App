import React from 'react';

function QCCard({ totalQCTasks}) {
  const getStatusTasks = (status) => {
    return totalQCTasks.filter(task => task.Status === status);
  };

  const renderTable = (statusTasks) => (
    
    <table className="min-w-full bg-white">
      <thead>
      <tr>
        <th className="w-1/3 px-4 py-2 truncate">Task Name</th>
        <th className="w-1/3 px-4 py-2 truncate">Assigned to</th>
          {/* You can add more columns if needed */}
      </tr>
      </thead>
      <tbody>
        {statusTasks.map(task => (
          <tr key={task.id}>
            <td className="text-xs border px-4 py-2">{task['Job Name']}</td>
            <td className="text-xs border px-4 py-2">{task['Assigned To']}</td>
            {/* You can add more columns if needed */}
          </tr>
        ))}
      </tbody>
    </table>
    
  );

  return (
<div className="grid grid-cols-3 gap-2">
    <div>
        <h2 className="text-xl font-bold mb-2">Ready For QC</h2>
        <div style={{ width: 'fit-content' }}>
            {renderTable(getStatusTasks('Ready For QC'))}
        </div>
    </div>
    <div>
        <h2 className="text-xl font-bold mb-2">In Progress</h2>
        <div style={{ width: 'fit-content' }}>
            {renderTable(getStatusTasks('In Progress'))}
        </div>
    </div>
    <div>
        <h2 className="text-xl font-bold mb-2">Waiting on Rep</h2>
        <div style={{ width: 'fit-content' }}>
            {renderTable(getStatusTasks('Waiting on Rep'))}
        </div>
    </div>
</div>

  );
}

export default QCCard;