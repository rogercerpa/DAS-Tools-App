// src/pages/LandingPage/index.js
import React from 'react';
import Sidebar from '../Components/Sidebar';
import ProjectCreation from '../Components/ProjectCreation';
import QueueStatus from '../Components/QueueStatus';

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        {/* Render your features here */}
        <ProjectCreation />
        <QueueStatus />
      </div>
    </div>
  );
};

export default Home;
