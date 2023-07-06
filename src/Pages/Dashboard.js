import React from 'react';
import Button from '../Components/DataImport'
import CreateFolder from '../Components/CreateFolderButton';


const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-black ">Dashboard</h1>
      <p>Queue status</p>
      <Button/>
      <CreateFolder/>
    </div>
  );
};



export default Dashboard;