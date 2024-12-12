import React from 'react';
import './Footer.css';
import facebook from './image/facebook.png'
import instagram from './image/instagram.png'
import linkedin from './image/linkedin.png'

function Footer() {
  const currentYear = new Date().getFullYear();  // Get the current year dynamically

  return (
    <div className="footer-container">
      <div className="info">
        <div className="footer-section">
          <h1>Adwa Furniture</h1>
          <p>A108 Bole Street.</p>
          <p>Addis Ababa, AA 535022.</p>
          <p><span>Phone No:</span> 09847339393</p>
          <p><span>Email:</span> Adwafurniture@gmail.com</p>
          <div className="images">
            <img src={facebook} alt="social_media" />
            <img src={instagram} alt="social_media" />
            <img src={linkedin} alt="social_media" />
          </div>
        </div>

        <div className="footer-section">
          <h1>Quick Links</h1>
          <div className="links">
            <p><a href="/">Home</a></p>
            <p><a href="/">About</a></p>
            <p><a href="/">Services</a></p>
            <p><a href="/">Portfolio</a></p>
            <p><a href="/">Contact</a></p>
          </div>
        </div>

        <div className="footer-section">
          <h1>Our Services</h1>
          <p>Sofa Design</p>
          <p>Bed Design</p>
          <p>Furniture Design</p>
          <p>Custom Interiors</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; {currentYear} <b>ADWA FURNITURE</b> ALL RIGHTS RESERVED</p>
      </div>
      <div className="misale">
        <h5>Designed by</h5>
       <a href='http//:www.misaledigitals.com' target='blank'><h4>Misale Digitals</h4></a> 
      </div>
    </div>
  );
}

export default Footer;
