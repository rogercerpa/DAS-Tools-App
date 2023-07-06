import React from 'react';
import Tools from "./Tools"
import Header from '../Components/Header';
import LandingPage from './LandingPage';
import Dashboard from "./Dashboard"
import Team from "./Team"
import { Route, Routes } from 'react-router-dom';
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mb-auto">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Tools/*" element={<Tools />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Team" element={<Team />} />
            </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
};



export default Home;

