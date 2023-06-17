import React from 'react';
import Sidebar from '../Components/Sidebar';
import ProjectCreation from '../Features/ProjectCreation';
import QueueStatus from '../Features/QueueStatus';
import { Route, Routes } from 'react-router-dom';

const Tools = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
        <div className="flex flex-row">  
          <Sidebar />
          <div className="flex flex-col w-full">
            <Routes>
              <Route path="/ProjectCreation" element={<ProjectCreation />} />
              <Route path="/QueueStatus" element={<QueueStatus />} />
            </Routes>
          </div>
        </div>
      
     
    </div>
  );
};



export default Tools;