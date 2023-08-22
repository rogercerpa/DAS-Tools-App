import React from 'react';
import CreateFolder from "../Buttons/CreateFolderButton";

function TriageProcess(props) {
  const { data } = props;

  const displayFields = [
    { key: 'Job Name', label: 'Job Name' },
    { key: 'Doc #', label: 'Document Number' },
    { key: 'Rep', label: 'Rep' },
    { key: 'Assigned To', label: 'Assigned To' },
    { key: 'Due Date', label: 'Due Date' },
    { key: 'Requested Date', label: 'Requested Date' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Triage Process</h1>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-900">Job Information</h2>
        <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 mt-4">
          <h3 className="text-lg font-semibold">Project Details</h3>
          <ul className="mt-2 space-y-2">
            {displayFields.map(({ key, label }) => (
              <li key={key}>
                <span className="font-semibold text-gray-700">{label}:</span>{" "}
                {key === 'Requested Date' || key === 'Due Date' ?
                  new Date(data[key]).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }) :
                  data[key]
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"><CreateFolder/></button>
      </div>
    </div>
  );
}

export default TriageProcess;





