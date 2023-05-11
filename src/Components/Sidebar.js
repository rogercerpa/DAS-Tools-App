import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen w-64 p-4">
      <NavLink
        to="/ProjectCreation"
        className="block mb-4"
        activeClassName="text-blue-500"
      >
        Project Creation
      </NavLink>
      <NavLink
        to="/QueueStatus"
        className="block mb-4"
        activeClassName="text-blue-500"
      >
        Queue Status
      </NavLink>
      {/* Add more navigation links for additional features */}
    </div>
  );
};

export default Sidebar;

