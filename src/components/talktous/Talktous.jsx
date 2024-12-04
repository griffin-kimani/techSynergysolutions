import React from 'react';
import './talktous.css';
import Navbar from '../navbar/Navbar'; 

const Talktous = () => {
  return (
    <div className="talktous-page">
      <Navbar />
      <div className="talktous-container">
        <h2>Talk to Us</h2>
        <p>We’re here to answer your questions. Please fill out the form below.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry">Inquiry</label>
            <textarea id="inquiry" name="inquiry" rows="6" placeholder="Type your inquiry here" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Talktous;