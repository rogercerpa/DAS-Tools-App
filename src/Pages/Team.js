
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
        {location.pathname === '/Team' && 
                <div className="relative  lg:px-2">
                <div className="mx-auto max-w-2xl  sm:py-48 lg:py-56">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Team news and information
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    To begin, select an option from the side panel. 
                    </p>
                  </div>
                </div>
        
              </div>}
          <Routes>
            <Route path="Agencies" element={<Agencies />} />
            <Route path="AssociateProfile" element={<AssociateProfile />} />
          </Routes>
        </div>
    </div>
    
  );
};

export default Team;
