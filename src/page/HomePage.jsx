import React from "react";
import Navbar from "../navbar/Navbar";
import "../page/homepage.css";
import { HeroSection } from "../hero/HeroSection";
const HomePage = () => {
  return (
    <div className="bus-container">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
