
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"


const Header = () => {


  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
        <Link to="/" className="flex flex-col items-center mb-2 sm:mb-0">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-cover" />
          <h1 className="text-xs mt-2">All Tools in One</h1>
        </Link>
        <button className="bg-[#5A0] hover:bg-[#4d7427] text-white py-2 px-4 rounded">
          Import Data
        </button>
      </div>
    </header>
  );
};

export default Header;
