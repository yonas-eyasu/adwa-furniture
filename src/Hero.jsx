import React from 'react';
import './Hero.css'; // Ensure your styles are correct
import heroimg from './image/heroimg.jpg'; 
import arrow from './image/arrow.png'; // Import the arrow image correctly
import { Link } from 'react-scroll';  // Import Link from react-scroll for smooth scroll
import 'animate.css'; // Import animation library

function Hero() {
  return (
    <div
      className="hero text-yellow-200 text-center capitalize"
      style={{ backgroundImage: `url(${heroimg})` }} // Background image for hero section
    >
      <div className="bgcolor">
        <div className="texts">
          <h1>Welcome to Adwa Furniture</h1>
          <p className="font-bold m-2">Quality Furniture Timeless Beauty</p>
          <div className="arrow">
            {/* Use Link component for smooth scrolling to the next section */}
            <Link to="about" smooth={true} duration={500}>
              <img src={arrow} alt="Down Arrow" className="img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
