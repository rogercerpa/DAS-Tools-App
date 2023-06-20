import React from 'react';
import Sidebar from '../Components/Sidebar';
import Coordination from "../Features/Coordination"
import ProjectCreation from '../Features/ProjectCreation';
import Schedule from '../Features/Schedule';
import { Route, Routes } from 'react-router-dom';

const Tools = () => {
  return (
    <div className="flex min-h-screen"> 
        <Sidebar />
        <div className="flex-grow">
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