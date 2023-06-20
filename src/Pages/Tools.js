import React from 'react';
import Sidebar from '../Components/Sidebar';
import Coordination from "../Features/Coordination"
import ProjectCreation from '../Features/ProjectCreation';
import Schedule from '../Features/Schedule';
import { Route, Routes, useLocation } from 'react-router-dom';

const Tools = () => {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen"> 
        <Sidebar />
        
        <div className="flex-grow">
        <h1>DAS Productivity Tools</h1>
        {location.pathname === '/Tools' && <p>Select a tool from the Tools list on the left.</p>}
          <Routes>
            <Route path="Coordination" element={<Coordination />} />
            <Route path="ProjectCreation" element={<ProjectCreation />} />
            <Route path="Schedule" element={<Schedule />} />
          </Routes>
        </div>
    </div>
  );
};



export default Tools;