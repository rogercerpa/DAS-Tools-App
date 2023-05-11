import React from 'react';
import Sidebar from '../Components/Sidebar';
import ProjectCreation from '../Features/ProjectCreation';
import QueueStatus from '../Features/QueueStatus';
import LandingPage from '../Pages/LandingPage';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProjectCreation" element={<ProjectCreation />} />
          <Route path="/QueueStatus" element={<QueueStatus />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;

