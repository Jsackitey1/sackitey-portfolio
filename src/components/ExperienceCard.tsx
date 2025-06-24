import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ExperienceCard.css';

interface ExperienceCardProps {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  category: 'internship' | 'hackathon' | 'open-source' | 'project';
  skills: string[];
  achievements?: string[];
  links?: { label: string; url: string }[];
  current?: boolean;
  logo?: string;
  color?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  category,
  skills,
  achievements,
  links,
  current,
  logo,
  color = '#00ff88'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'internship': return '💼';
      case 'hackathon': return '🏆';
      case 'open-source': return '🌐';
      case 'project': return '🚀';
      default: return '⭐';
    }
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'internship': return { label: 'Internship', color: '#4285F4' };
      case 'hackathon': return { label: 'Hackathon', color: '#FF6B35' };
      case 'open-source': return { label: 'Open Source', color: '#28A745' };
      case 'project': return { label: 'Project', color: '#9C27B0' };
      default: return { label: 'Experience', color: '#00ff88' };
    }
  };

  const categoryInfo = getCategoryBadge(category);

  return (
    <motion.div
      className="experience-card"
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{ '--accent-color': color } as React.CSSProperties}
    >
      <div className="card-header">
        <div className="company-info">
          <div className="company-logo">
            {logo ? (
              <img src={logo} alt={`${company} logo`} />
            ) : (
              <span className="logo-placeholder">{getCategoryIcon(category)}</span>
            )}
          </div>
          
          <div className="company-details">
            <h3 className="role-title">{role}</h3>
            <h4 className="company-name">{company}</h4>
            <div className="meta-info">
              <span className="location">📍 {location}</span>
              <span className="duration">
                📅 {startDate} - {current ? 'Present' : endDate}
              </span>
              {current && <span className="current-badge">Current</span>}
            </div>
          </div>
        </div>

        <div className="card-badges">
          <span 
            className="category-badge" 
            style={{ backgroundColor: categoryInfo.color }}
          >
            {categoryInfo.label}
          </span>
        </div>
      </div>

      <div className="card-content">
        <p className="description" dangerouslySetInnerHTML={{ __html: description }} />

        {achievements && achievements.length > 0 && (
          <div className="achievements-section">
            <h5 className="section-title">Key Achievements</h5>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="achievement-icon">🎯</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="skills-section">
          <h5 className="section-title">Technologies & Skills</h5>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {links && links.length > 0 && (
          <div className="links-section">
            <h5 className="section-title">Resources</h5>
            <div className="links-container">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                >
                  {link.label === 'GitHub' && '💻 '}
                  {link.label === 'Demo' && '🔗 '}
                  {link.label === 'DevPost' && '🏆 '}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        className="expand-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? 'Show less' : 'Show more'}
      >
        {isExpanded ? '▲ Show Less' : '▼ Learn More'}
      </button>

      {isExpanded && (
        <motion.div
          className="expanded-content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="additional-details">
            <h5>Impact & Learning</h5>
            <p>
              This experience contributed significantly to my growth in {skills.slice(0, 3).join(', ')} 
              and enhanced my understanding of collaborative development and problem-solving in 
              real-world scenarios.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;