import React from 'react';
import './Contact.css';
import sectionbg from './image/sectionbg.png';
import location from './image/location.png'
import phone from './image/phone-call.png'
import mail from './image/mail.png'
function Contact() {
  return (
    <div className="contact-us-container">
      <div className="contact-us">
        <div style={{ backgroundImage: `url(${sectionbg})`  }} className='bgimg' ><h1>Contacts</h1></div>
        <h4>ADWA FURNITURE</h4>
      </div>
      
      <div className="contact-info">
        {/* Address Section */}
        <div className="contact-item">
          <img src={location} alt="Address" className="contact-icon" />
          <h2>Address</h2>
          <p>Bole Medhanialem</p>
        </div>

        {/* Call Section */}
        <div className="contact-item">
          <img src={phone} alt="Call Us" className="contact-icon" />
          <h2>Call Us</h2>
          <p>+251 123 456 789</p>
        </div>

        {/* Email Section */}
        <div className="contact-item">
          <img src={mail} alt="Email" className="contact-icon" />
          <h2>Email</h2>
          <p>info@adwafurniture.com</p>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <h2>Find Us on the Map</h2>
          <iframe
  title="Adwa Furniture Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2334553038347!2d38.74!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zOTEuMDY1NSwgMzg3LjM1ODI!5e0!3m2!1sen!2sus!4v1615268936747!5m2!1sen!2sus"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

        </div>
      </div>
    </div>
  );
}

export default Contact;
