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
        
        {location.pathname === '/Tools' && 
        <div className="relative  lg:px-2">
        <div className="mx-auto max-w-2xl  sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            DAS Productivity Tools
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            To begin, select a tool from the side panel. 
            </p>
          </div>
        </div>

      </div>}
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