import React from 'react';
import Tools from "./Tools"
import Header from '../Components/Header';
import LandingPage from './LandingPage';
import Dashboard from "./Dashboard"
import Team from "./Team"
import LogIn from "../Components/LogInSignUp/LogIn"
import { Route, Routes } from 'react-router-dom';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mb-auto">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login/*" element={<LogIn />} />
              <Route path="/Tools/*" element={<Tools />} />
              <Route path="/Dashboard/*" element={<Dashboard />} />
              <Route path="/Team/*" element={<Team />} />
            </Routes>
      </main>

    </div>
  );
};



export default Home;

