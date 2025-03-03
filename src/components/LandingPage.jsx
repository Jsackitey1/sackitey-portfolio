import React from 'react';
import './LandingPage.css'; // Assuming you have a CSS file for styling

const LandingPage = () => {
  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="landing-page">
      {/* Background GIF will be set in CSS */}
      
      {/* Social Media Links */}
      <div className="socials">
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/assets/resume-icon.png" alt="Resume" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github-icon.png" alt="GitHub" />
        </a>
      </div>

      {/* Main Content Rectangle */}
      <div className="content-rectangle">
        <h2 className="greeting">Hi, my name is</h2>
        <h1 className="name">Joseph Sackitey.</h1>
        <h2 className="title">I am an Engineer and a leader</h2>
      </div>

      {/* Browse Portfolio Section */}
      <div className="browse-section">
        <button onClick={scrollToAbout} className="portfolio-link">
          <p>Browse my portfolio</p>
          <div className="arrow-down"></div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage; 