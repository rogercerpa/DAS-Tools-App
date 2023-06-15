import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import ProjectCreation from '../Features/ProjectCreation';
import QueueStatus from '../Features/QueueStatus';
import LandingPage from '../Pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
    <div className="flex">  
      <Sidebar />
      <div className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProjectCreation" element={<ProjectCreation />} />
          <Route path="/QueueStatus" element={<QueueStatus />} />
        </Routes>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;

