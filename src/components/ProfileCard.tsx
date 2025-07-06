import React from 'react';
import { motion } from 'framer-motion';
import './ProfileCard.css';

const ProfileCard: React.FC = () => {
  const personalInfo = {
    name: "Joseph Sackitey",
    title: "Computer Science & Physics Student",
    location: "Gettysburg, PA",
    email: "sackiteyjoseph44@gmail.com",
    university: "Gettysburg College",
    gradYear: "2027",
    gpa: "3.8+",
    honors: ["Sigma Pi Sigma Physics Honor Society", "Pi Mu Epsilon Math Honor Society"]
  };

  const skills = [
    "Full-Stack Development",
    "Mobile Development",
    "Data Analysis",
    "IoT & Hardware",
    "Open Source Contribution",
    "Team Leadership",
    "Sustainability Projects"
  ];

  const interests = [
    "💻 Full Stack Development",
    "🧩 Quantum Computing",
    "🚀 Space Technology",
    "🌱 Sustainability",
    "🤖 Artificial Intelligence",
    "📊 Data Science",
    "🎮 Game Development",
    "🔬 Physics Research",
    "🌍 Community Impact",
    "🏆 Hackathons"
  ];

  return (
    <motion.div
      className="profile-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="profile-content">
        <div className="profile-main">
          <div className="profile-header">
            <div className="profile-avatar">
              <span className="avatar-placeholder">JS</span>
            </div>
            <div className="profile-info">
              <h2>{personalInfo.name}</h2>
              <h3>{personalInfo.title}</h3>
              <p className="location">📍 {personalInfo.location}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-section">
              <h4>🎓 Academic Information</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">University:</span>
                  <span className="detail-value">{personalInfo.university}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Graduation:</span>
                  <span className="detail-value">Class of {personalInfo.gradYear}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">GPA:</span>
                  <span className="detail-value">{personalInfo.gpa}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h4>🏆 Honors & Recognition</h4>
              <ul className="honors-list">
                {personalInfo.honors.map((honor, index) => (
                  <li key={index}>{honor}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4>💡 Core Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4>🌟 Interests & Passions</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="interest-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-sidebar">
          <div className="personal-statement">
            <h4>📝 About Me</h4>
            <p>
              I am a sophomore studying computer science and physics, passionate about building innovative solutions that make life easier. 
              From developing interactive web apps to contributing to open-source projects, I love combining logic and creativity to solve real-world problems.
            </p>
            <p>
              Beyond coding, I'm deeply involved in sustainability efforts, community service, and fostering diversity in STEM. Whether it's organizing events, 
              mentoring peers, or working on research-driven projects, I strive to make a meaningful impact.
            </p>
          </div>

          <div className="contact-section">
            <h4>📫 Get In Touch</h4>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-btn email">
                ✉️ Email Me
              </a>
              <a href="https://www.linkedin.com/in/joseph-sackitey/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
                💼 LinkedIn
              </a>
              <a href="https://github.com/Jsackitey1" target="_blank" rel="noopener noreferrer" className="contact-btn github">
                💻 GitHub
              </a>
              <a href="/sackitey-portfolio/assets/Joseph_Sackitey_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-btn resume">
                📄 Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;