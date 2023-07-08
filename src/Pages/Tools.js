import React from 'react';
import Sidebar from '../Components/Sidebar';
import Coordination from "../Features/ToolsFeatures/Coordination"
import ProjectCreation from '../Features/ToolsFeatures/ProjectCreation';
import CSATemail from "../Features/ToolsFeatures/CSATemail"
import Chatbot from "../Features/ToolsFeatures/ChatBot"
import StartUp from "../Features/ToolsFeatures/StartUp"
import { Route, Routes, useLocation } from 'react-router-dom';

const Tools = () => {
  const location = useLocation();
  
  return (

    <div className="flex min-h-screen"> 
        <Sidebar currentPage="Tools" />
        
        <div className="flex-grow">
        <h1>DAS Productivity Tools</h1>
        {location.pathname === '/Tools' && <p>Select a tool from the Tools list on the left.</p>}
          <Routes>
            <Route path="Coordination" element={<Coordination />} />
            <Route path="ProjectCreation" element={<ProjectCreation />} />
            <Route path="CSATemail" element={<CSATemail />} />
            <Route path="ChatBot" element={<Chatbot />} />
            <Route path="StartUp" element={<StartUp />} />
          </Routes>
        </div>
    </div>
  );
};



export default Tools;