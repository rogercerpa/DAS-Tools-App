import React from 'react';
import Sidebar from '../Components/Sidebar';
import ScheduleView from "../Features/DashboardFeatures/ScheduleView"
import QueueStatus from '../Features/DashboardFeatures/QueueStatus';
import { Route, Routes } from 'react-router-dom';


const Dashboard = () => {


  return (
    <div className="flex min-h-screen"> 
        <Sidebar currentPage="Dashboard" />
        
        <div className="flex-grow">
     
        <Routes>
          <Route path="/" element={<QueueStatus />} />
          <Route path="ScheduleView/*" element={<ScheduleView />} />
          <Route path="QueueStatus/*" element={<QueueStatus />} />
        </Routes>
      </div>
    </div>
  );
};



export default Dashboard;