import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import react-scroll's Link component
import './Nav.css';
import logo from './image/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle the scroll effect
  const handleScroll = () => {
    if (window.scrollY > 50) { // Check if the user has scrolled more than 50px
      setIsScrolled(true); // Adds the 'scrolled' class if user scrolls past 50px
    } else {
      setIsScrolled(false); // Removes the 'scrolled' class if user is at the top
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Add the scroll event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
    
  {/* Logo */}
  <div className="logo">
        <a href="/"><img src={logo} alt="logo" /></a>
      </div>
      
      <div className="container">
        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`} >
          <div className="nav">
            <ul>
              <li>
                <Link to="hero" smooth={true} duration={500} className="navbar-link" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="navbar-link" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500} className="navbar-link" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500} className="navbar-link" onClick={() => setIsOpen(false)}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="navbar-link" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    
        {/* Hamburger Icon for Mobile */}
        <button className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;
