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

  // Check if we're on the TalkToUs page
  const isTalkToUsPage = location.pathname === '/talktous';

  // Smooth scrolling helper
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="navbar" className="section">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isTalkToUsPage ? 'talktous-navbar' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="navbar-links">
          <li className="home-link">
            {isTalkToUsPage ? (
              <Link to="/" onClick={() => setTimeout(() => handleScrollToSection('navbar'), 100)}>
                Home
              </Link>
            ) : (
              <a onClick={() => handleScrollToSection('navbar')}>Home</a>
            )}
          </li>
          <li>
            {isTalkToUsPage ? (
              <Link to="/" onClick={() => setTimeout(() => handleScrollToSection('about'), 100)}>
                About
              </Link>
            ) : (
              <a onClick={() => handleScrollToSection('about')}>About</a>
            )}
          </li>
          <li>
            {isTalkToUsPage ? (
              <Link to="/" onClick={() => setTimeout(() => handleScrollToSection('services'), 100)}>
                Services
              </Link>
            ) : (
              <a onClick={() => handleScrollToSection('services')}>Services</a>
            )}
          </li>
          <li>
            {isTalkToUsPage ? (
              <Link to="/" onClick={() => setTimeout(() => handleScrollToSection('contactus'), 100)}>
                Contact Us
              </Link>
            ) : (
              <a onClick={() => handleScrollToSection('contactus')}>Contact Us</a>
            )}
          </li>
          <li>
            <Link to="/talktous">Talk to Us</Link>
          </li>
        </ul>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="hero-text">
        <h1>techSynergy Solutions</h1>
        <p>Your Trusted Technology Partner</p>
        <a onClick={() => handleScrollToSection('about')} className="cta-button">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Navbar;
