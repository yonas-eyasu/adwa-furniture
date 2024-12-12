import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import Testimonial1 from './image/testimonials-1.jpg';
import Testimonial2 from './image/testimonials-2.jpg';
import Testimonial3 from './image/testimonials-3.jpg';
import Testimonial4 from './image/testimonials-4.jpg';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const testimonials = [
    {
      image: Testimonial1,
      title: 'Saul Goodman',
      h1: `Ceo &amp; Founder`,
      text: 'Adwa Furniture transformed my office space with their elegant, durable furniture. The quality is unmatched, and the custom designs truly reflect our company’s identity. Highly recommended!',
    },
    {
      image: Testimonial2,
      h1: `Business Owner`,
      title: 'Sara Wilsson',
      text: 'As an interior designer, I rely on high-quality, stylish furniture for my projects. Adwa Furniture delivers both in abundance. Their craftsmanship and attention to detail are second to none.',
    },
    {
      image: Testimonial3,
      h1: `Hotel owner`,
      title: `Jena Karlis`,
      text: 'We outfitted our entire hotel with Adwa Furniture, and our guests have complimented the stylish, comfortable furniture in every room. Their commitment to quality and customer service is truly exceptional.',
    },
    {
      image: Testimonial4,
      h1: `Business man`,
      title: 'John Larson',
      text: 'I’m so happy with the furniture I purchased from Adwa Furniture. It’s not only beautiful and well-made, but it also fits perfectly in my home. The team was incredibly helpful and professional throughout the process.',
    },
  ];

  const nextSlide = () => {
    setAnimationClass('slide-in');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setAnimationClass('slide-in');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="testimonial">
      <h1>Testimonial</h1>
      <div className="slider">
        <button onClick={prevSlide} className="slider-button prev-button">{"<"}</button>
        <div className={`slider-content ${animationClass}`}>
          <img src={currentTestimonial.image} alt={currentTestimonial.title} />
          <div className="testimonial-text">
            <h2>{currentTestimonial.title}</h2>
            <p>{currentTestimonial.text}</p>
          </div>
        </div>
        <button onClick={nextSlide} className="slider-button next-button">{">"}</button>
      </div>
    </div>
  );
};

export default Testimonial;
