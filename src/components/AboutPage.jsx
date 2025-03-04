import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div id="about-section" className="about-page">
      {/* Main container with two columns */}
      <div className="about-container">
        {/* Left side - Profile GIF */}
        <div className="profile-gif">
          {/* You can replace this with an actual GIF or image */}
          {/* <img src="/src/assets/AboutMe.mp4" alt="Profile Animation" /> */}
        </div>

        {/* Right side - About content */}
        <div className="about-content">
          {/* About Me Section */}
          <div className="about-me-section">
            <h1>About Me</h1>
            <div className="about-essay">
              <p>
              I am a sophomore studying computer science and physics. I am passionate about building innovative solutions that make life easier. 
              From developing interactive web apps to contributing to open-source projects, 
              I love combining logic and creativity to solve real-world problems.
              </p>
              <p>
              Beyond coding, I'm deeply involved in sustainability efforts, community service, and fostering diversity in STEM. Whether it's organizing events, mentoring peers, or working on research-driven projects, I strive to make a meaningful impact.

              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Science</h3>
              <p>Gettysburg College, Pennsylvania</p>
              <p>Concentration: Computer Science</p>
            </div>
            
            <div className="education-item">
              <h3>Bachelor of Arts</h3>
              <p>Gettysburg College, Pennsylvania</p>
              <p>Concentration: Physics</p>
              <p>Honors: Sigma Pi Sigma, Physics Honor Society</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
