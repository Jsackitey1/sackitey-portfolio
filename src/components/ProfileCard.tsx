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
    gpa: "3.81",
    honors: [
      "Sigma Pi Sigma Physics Honor Society",
      "Pi Mu Epsilon Math Honor Society",
      "2x Hackathon Winner (University of Delaware)",
      "Resident Assistant; ColorStack, ACM, and CodePath member",
      "2025 Generation Google Scholar (Institute of International Education): $10,000 award recognizing academic excellence, leadership, and commitment to diversity, equity, and inclusion",
      "2025 John Alfred Hamme Award (Gettysburg College): Highest recognition for leadership, loyalty, kindness, courtesy, and true democracy"
    ]
  };

  const skills = [
    "Full-Stack Development",
    "Data Engineering",
    "Data Analysis",
    "Computational Physics",
    "CI/CD & Test Automation",
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
              I study computer science and physics at Gettysburg College, with graduation expected in May 2027.
              My work spans data engineering at Intuit, desktop software at Google, and computational physics research.
            </p>
            <p>
              I build production data pipelines, AI developer tools, and full-stack applications. As a Generation Google Scholar,
              Resident Assistant, and member of ColorStack, ACM, and CodePath, I also value leadership and community impact.
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
              <a href="https://github.com/Jsackitey1?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-btn github">
                💻 GitHub
              </a>
              <a href="/assets/Joseph_Sackitey_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-btn resume">
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