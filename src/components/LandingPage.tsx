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
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/joseph-sackitey/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Jsackitey1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src="/assets/github.svg" alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a
          href="https://x.com/sackitey_j"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
        >
          <img src="/assets/x.svg" alt="Twitter" />
          <span>Twitter</span>
        </a>
        <a
          href="mailto:sackiteyjoseph44@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          <img src="/assets/email.svg" alt="Email" />
          <span>Email</span>
        </a>
        <a
          href="https://www.instagram.com/sackitey._j"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <img src="/assets/instagram.svg" alt="Instagram" />
          <span>Instagram</span>
        </a>
      </div>

      <div className="content-rectangle window95-window">
        <div className="window95-titlebar">
          <span>WELCOME.EXE</span>
          <div className="window95-controls" aria-hidden="true">
            <span className="window95-control">_</span>
            <span className="window95-control">□</span>
            <span className="window95-control">×</span>
          </div>
        </div>

        <div className="window95-body">
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
          <p className="title">Engineer • Leader • Builder of delightful software</p>

          <div className="landing-actions">
            <button
              onClick={scrollToAbout}
              className="button-95"
              aria-label="Browse Portfolio"
            >
              Explore Portfolio
            </button>
            <a
              href="/assets/Joseph_Sackitey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-95"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;