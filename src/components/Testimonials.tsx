import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ruth Miller",
      role: "Facilities Services Coordinator",
      company: "Gettysburg College",
      content: "Working with Joseph on the sustainability mapping project was a pleasure. His technical skills combined with his passion for environmental issues resulted in an innovative solution that benefited our entire campus community.",
      rating: 5
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonials-container" id="testimonials-section">
      <h2 className="section-title">What People Say</h2>
      <p className="section-subtitle">Feedback from colleagues and collaborators</p>
      
      <div className="testimonials-slider">
        <button 
          className="slider-btn prev-btn"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              {testimonials[currentIndex].content}
            </p>
            <div className="testimonial-rating">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
          </div>
          
          <div className="testimonial-author">
            <div className="author-info">
              <h4 className="author-name">{testimonials[currentIndex].name}</h4>
              <p className="author-role">
                {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>
        
        <button 
          className="slider-btn next-btn"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
      
      <div className="slider-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;