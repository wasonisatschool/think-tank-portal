import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Think Tank</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/research-areas">Research Areas</Link></li>
          <li><Link to="/research-outputs">Research Outputs</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/news-center">News Center</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
