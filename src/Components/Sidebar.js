import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen w-64 p-4">
      <NavLink
        to="/"
        className="block mb-4 hover:bg-[#5A0] py-2 px-4 rounded"
        activeClassName="text-blue-500"
      >
        Home
      </NavLink>
      <NavLink
        to="/ProjectCreation"
        className="block mb-4 hover:bg-[#5A0] py-2 px-4 rounded"
        activeClassName="text-blue-500"
      >
        Project Creation
      </NavLink>
      <NavLink
        to="/QueueStatus"
        className="block mb-4 hover:bg-[#5A0] py-2 px-4 rounded"
        activeClassName="text-blue-500"
      >
        Queue Status
      </NavLink>
      
    </div>
  );
};

export default Sidebar;

