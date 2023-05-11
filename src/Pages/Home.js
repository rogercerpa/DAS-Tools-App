// src/pages/LandingPage/index.js
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
          <Route exact path="/" component={LandingPage} />
          <Route path="/ProjectCreation" component={ProjectCreation} />
          <Route path="/QueueStatus" component={QueueStatus} />
          {/* Add more routes for additional features */}
        </Routes>
      </div>
    </div>
  );
};

export default Home;
