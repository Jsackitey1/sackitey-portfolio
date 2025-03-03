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
          <img src="/src/assets/AboutMe.mp4" alt="Profile Animation" />
        </div>

        {/* Right side - About content */}
        <div className="about-content">
          {/* About Me Section */}
          <div className="about-me-section">
            <h1>About Me</h1>
            <div className="about-essay">
              <p>
                Hello! I'm Joseph Sackitey, a passionate engineer and leader with expertise in 
                software development and physics. I enjoy solving complex problems and building 
                innovative solutions that make a difference. My background in both computer science 
                and physics gives me a unique perspective when approaching technical challenges.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or engaging in continuous learning. I believe in the power of 
                technology to transform lives and am committed to creating impactful solutions.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p>University Name</p>
              <p>Graduation Year</p>
              <p>Relevant coursework: Software Engineering, Data Structures, Algorithms, Database Systems</p>
            </div>
            
            <div className="education-item">
              <h3>Bachelor of Arts in Physics</h3>
              <p>University Name</p>
              <p>Graduation Year</p>
              <p>Relevant coursework: Quantum Mechanics, Electromagnetism, Thermodynamics, Mathematical Physics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
