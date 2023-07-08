import React from 'react';
import Sidebar from '../Components/Sidebar';
import ScheduleView from "../Features/DashboardFeatures/ScheduleView"
import QueueStatus from '../Features/DashboardFeatures/QueueStatus';
import { Route, Routes, useLocation } from 'react-router-dom';


const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen"> 
        <Sidebar currentPage="Dashboard" />
        
        <div className="flex-grow">
        <h1>DAS Team All in one info</h1>
        {location.pathname === '/Dashboard' && <p>Select a option from the list on the left.</p>}
          <Routes>
            <Route path="ScheduleView" element={<ScheduleView />} />
            <Route path="QueueStatus" element={<QueueStatus />} />
          </Routes>
        </div>
    </div>
  );
};



export default Dashboard;