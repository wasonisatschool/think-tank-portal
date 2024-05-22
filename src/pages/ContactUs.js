import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Address: 1234 Think Tank Road, City, Country</p>
        <p>Phone: +123-456-7890</p>
        <p>Email: info@thinktank.com</p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
