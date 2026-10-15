import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface EnhancedProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({ project, viewMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'in-progress':
        return '#00ff88';
      case 'planning': return '#ff6b6b';
      default: return '#00ff88';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'featured': return '⭐';
      case 'hackathon': return '🏆';
      case 'secondary': return '🚀';
      case 'personal': return '💡';
      default: return '📁';
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const isLargeGif = project.image.includes('bionic-arm.gif') || project.image.includes('linklibrary.gif');
  const displayImageSrc = project.image;

  return (
    <motion.div
      className={`enhanced-project-card ${viewMode} ${project.featured ? 'featured' : ''}`}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-header">
        <div className="project-image-container">
          {project.image && !imageLoaded && !imageError && (
            <div className="image-skeleton">
              <div className="skeleton-pulse"></div>
            </div>
          )}
          
          {project.image && !imageError ? (
            <img
              ref={imgRef}
              src={displayImageSrc}
              alt={project.title}
              className={`project-image ${imageLoaded ? 'loaded' : ''} ${isLargeGif ? 'large-gif' : ''}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
              style={isLargeGif && !imageLoaded ? { filter: 'blur(2px)', transform: 'scale(0.95)' } : {}}
            />
          ) : (
            <div className="image-fallback">
              <span className="fallback-icon">🖼️</span>
              <span className="fallback-text">Image not available</span>
            </div>
          )}

          <div className="image-overlay">
            <div className="project-meta">
              <span className="category-badge">
                {getCategoryIcon(project.category)} {project.category}
              </span>
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="project-header-info">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-metrics">
            {project.duration && <span className="metric">⏱️ {project.duration}</span>}
            {project.teamSize && <span className="metric">👥 {project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</span>}
          </div>
        </div>

        <p className="project-description">
          {isExpanded ? project.longDescription : project.description}
        </p>

        {project.impact && (
          <div className="impact-section">
            <strong>Impact:</strong> {project.impact}
          </div>
        )}

        <div className="technologies-section">
          <h5>Technologies:</h5>
          <div className="tech-tags">
            {project.technologies.slice(0, viewMode === 'list' ? 8 : 4).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > (viewMode === 'list' ? 8 : 4) && (
              <span className="tech-more">
                +{project.technologies.length - (viewMode === 'list' ? 8 : 4)}
              </span>
            )}
          </div>
        </div>

        <div className="card-actions">
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn demo"
            >
              🔗 Live Demo
            </a>
          )}
          {project.demo && !project.liveDemo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn demo"
            >
              🔗 Demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-btn github"
            >
              💻 Code
            </a>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="action-btn details"
          >
            {isExpanded ? '📖 Less' : '📚 More'}
          </button>
        </div>

        {isExpanded && (
          <motion.div
            className="expanded-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.challenges && project.challenges.length > 0 && (
              <div className="detail-section">
                <h5>🎯 Challenges</h5>
                <ul>
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div className="detail-section">
                <h5>💡 Solutions</h5>
                <ul>
                  {project.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.learnings && project.learnings.length > 0 && (
              <div className="detail-section">
                <h5>📚 Key Learnings</h5>
                <ul>
                  {project.learnings.map((learning, idx) => (
                    <li key={idx}>{learning}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.skills && project.skills.length > 0 && (
              <div className="detail-section">
                <h5>🛠️ Skills Developed</h5>
                <div className="skills-tags">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedProjectCard;