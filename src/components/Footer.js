import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <p>Address: 1234 Think Tank Road, City, Country</p>
          <p>Phone: +123-456-7890</p>
          <p>Email: info@thinktank.com</p>
        </div>
        <div className="social-media">
          <a href="#facebook" className="social-icon facebook">Facebook</a>
          <a href="#twitter" className="social-icon twitter">Twitter</a>
          <a href="#linkedin" className="social-icon linkedin">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Think Tank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
