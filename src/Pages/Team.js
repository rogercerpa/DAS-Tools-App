
import React from 'react';
import Agencies from "../Features/TeamFeatures/Agencies"
import AssociateProfile from "../Features/TeamFeatures/AssociateProfile"
import Sidebar from "../Components/Sidebar"
import { Route, Routes, useLocation } from 'react-router-dom';

const Team = () => {

  const location = useLocation();

  return (

    <div className="flex min-h-screen"> 
        <Sidebar currentPage="Team" />
        
        <div className="flex-grow">
        <h1>Associate info/profile</h1>
        {location.pathname === '/Team' && <p>Select a option from the list on the left.</p>}
          <Routes>
            <Route path="Agencies" element={<Agencies />} />
            <Route path="AssociateProfile" element={<AssociateProfile />} />
          </Routes>
        </div>
    </div>
    
  );
};

export default Team;
