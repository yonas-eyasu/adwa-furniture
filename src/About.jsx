import React from 'react';
import 'animate.css'; // Ensure animate.css is imported
import './About.css'; // Ensure your styles are correct
import wifiSignal from './image/wifi-signal.png';
import brifcase from './image/brifcase.png';
import diamond from './image/diamond.png';

function About() {
  return (
    <div className="about-section about" >
   
      <div className="about-content animate__animated animate__backInUp animate__duration-5s">
        <div className="about-image">
          <img src={wifiSignal} alt="WiFi Signal" />
        </div>
        <div className="about-text">
          <h3>Vision</h3>
          <p>To be the Leader of Quality!</p>
        </div>
        <div className="about-image">
          <img src={diamond} alt="Diamond" />
        </div>
        <div className="about-text">
          <h3>About</h3>
          <p>
          Adwa Furniture Factory (AFF) was established in 1959 E.C. and has a rich historical presence. For nearly five decades, the company has been a cornerstone in advancing the furniture industry by designing and manufacturing innovative furniture and spring mattresses. Owned by an Ethiopian investor, Adwa Furniture Factory provides employment for over 400 permanent and temporary workers. AFF is a premier destination for high-quality furniture at affordable prices, offering a wide range of products in our catalog. We pride ourselves on being the top furniture manufacturer for custom-made products, serving clients across the country.
          </p>
        </div>
      </div>

      <div className="about-content animate__animated animate__backInUp">
        <div className="about-image">
          <img src={brifcase} alt="Briefcase" />
        </div>
        <div className="about-text">
          <h3>Our Values</h3>
          <p> We are committed to achieving exceptional results by maximizing limited resources, with creativity and effectiveness as our primary goals. Our foundation is built on satisfied customers, and we believe continual learning drives our quality and effectiveness. Embracing change, we strive to provide high-quality products at reasonable prices, paired with excellent customer service and punctuality as our core values.</p>
        </div>
        <div className="about-image">
          <img src={wifiSignal} alt="WiFi Signal" />
        </div>
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
          Our mission is to create value for our customers through reliability, flexibility, integrity, and speed. We foster a culture that values and supports employee engagement, encourages personal development, and promotes strong team collaboration. Additionally, we are dedicated to our global responsibility for environmental care by manufacturing products that meet our sustainability standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
