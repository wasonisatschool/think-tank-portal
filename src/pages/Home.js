import React from 'react';
import HeroSection from '../components/HeroSection';
import LatestResearch from '../components/LatestResearch';
import UpcomingEvents from '../components/UpcomingEvents';
import NewsSection from '../components/NewsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <LatestResearch />
      <UpcomingEvents />
      <NewsSection />
    </div>
  );
};

export default Home;
