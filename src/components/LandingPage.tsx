import React from 'react';
import './LandingPage.css';
import BreathingText from './BreathingText';

const LandingPage: React.FC = () => {
  const scrollToAbout = (): void => {
    const element = document.getElementById('about-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="landing-page">
      <div className="background-gif-container">
      </div>
      
      <div className="socials">
        <a 
          href="https://www.linkedin.com/in/joseph-sackitey/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src="/sackitey-portfolio/assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a 
          href="https://github.com/Jsackitey1" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src="/sackitey-portfolio/assets/github.svg" alt="GitHub" />
        </a>
        <a 
          href="https://x.com/sackitey_j" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
        >
          <img src="/sackitey-portfolio/assets/x.svg" alt="Twitter" />
        </a>
        <a 
          href="mailto:sackiteyjoseph44@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          <img src="/sackitey-portfolio/assets/email.svg" alt="Email" />
        </a>
        <a 
          href="https://www.instagram.com/sackitey._j" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <img src="/sackitey-portfolio/assets/instagram.svg" alt="Instagram" />
        </a>
      </div>

      <div className="content-rectangle">
        <h2 className="greeting">Hi, my name is</h2>
        <h1 className="name">
          <BreathingText 
            label="Joseph" 
            staggerFrom="center"
            staggerDuration={0.05}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="breathing-name"
          />
          <br />
          <BreathingText 
            label="Sackitey." 
            staggerFrom="center"
            staggerDuration={0.04}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="breathing-name"
          />
        </h1>
        <h2 className="title">I am an Engineer and a leader</h2>
      </div>

      <div className="browse-section">
        <button 
          onClick={scrollToAbout} 
          className="portfolio-link"
          aria-label="Browse Portfolio"
        >
          <p>Browse my portfolio</p>
          <div className="arrow-down"></div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;