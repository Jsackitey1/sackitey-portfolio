import React from 'react';
import './ProfileCard.css';

const ProfileCard: React.FC = () => {
  const skills = [
    "Problem Solving", "Team Leadership", "Research", "Communication",
    "Project Management", "Critical Thinking", "Innovation", "Mentoring"
  ];

  const interests = [
    "🚀 Space Technology", "🌱 Sustainability", "🤖 AI/ML", 
    "🔬 Physics Research", "📱 Mobile Dev", "🌍 Environmental Tech"
  ];

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            <span className="avatar-initials">JS</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Available for opportunities</span>
          </div>
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Joseph Sackitey</h2>
          <p className="profile-title">Computer Science & Physics Student</p>
          <p className="profile-location">📍 Gettysburg College, Pennsylvania</p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">3.8+</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Degrees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="bio-section">
          <h3 className="section-title">About Me</h3>
          <p className="bio-text">
            I'm a passionate computer science and physics student with a drive for innovation and sustainability. 
            I love building solutions that make a real impact, from developing interactive web applications to 
            contributing to open-source projects that benefit the community.
          </p>
          <p className="bio-text">
            Beyond academics, I'm deeply involved in sustainability initiatives, mentoring peers, and fostering 
            diversity in STEM. My interdisciplinary background allows me to approach problems from unique angles, 
            combining technical expertise with scientific rigor.
          </p>
        </div>

        <div className="skills-section">
          <h3 className="section-title">Core Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-chip">{skill}</span>
            ))}
          </div>
        </div>

        <div className="interests-section">
          <h3 className="section-title">Interests & Passions</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <span key={index} className="interest-chip">{interest}</span>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h3 className="section-title">Let's Connect</h3>
          <div className="contact-buttons">
            <a href="mailto:sackiteyjoseph44@gmail.com" className="contact-btn primary">
              📧 Email Me
            </a>
            <a href="/sackitey-portfolio/assets/Joseph_Sackitey_Resume.pdf" download className="contact-btn secondary">
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;