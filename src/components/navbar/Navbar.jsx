import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/pexels.jpg';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const isTalkToUsPage = location.pathname === '/talktous';

  return (
    <div className="section">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isTalkToUsPage ? 'talktous-navbar' : ''}`}>
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            {isTalkToUsPage ? (
              <Link to="/#about">About</Link>
            ) : (
              <a href="#home">About</a>
            )}
          </li>
          <li>
            {isTalkToUsPage ? (
              <Link to="/#services">Services</Link>
            ) : (
              <a href="#services">Services</a>
            )}
          </li>
          <li>
            {isTalkToUsPage ? (
              <Link to="/#footer">Contact Us</Link>
            ) : (
              <a href="#footer">Contact Us</a>
            )}
          </li>
          <li>
            <Link to="/talktous">Talk to Us</Link>
          </li>
          
        </ul>
      </nav>

      <div className="hero-text">
        <h1>techSynergy Solutions</h1>
        <p>Your Trusted Technology Partner</p>
        <a href="#home" className="cta-button">Learn More</a>
      </div>
    </div>
  );
};

export default Navbar;
