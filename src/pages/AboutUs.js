import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="introduction">
        <h2>Introduction</h2>
        <p>Our think tank is dedicated to combining academic research with practical policy making...</p>
      </section>
      <section className="organizational-structure">
        <h2>Organizational Structure</h2>
        <img src="path/to/organization-chart.png" alt="Organization Chart" />
      </section>
      <section className="history">
        <h2>History</h2>
        <p>Founded in 2021, our think tank has been at the forefront of policy research and development...</p>
      </section>
    </div>
  );
};

export default AboutUs;
