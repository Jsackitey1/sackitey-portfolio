import React from 'react';
import { CardProps } from '../types';

const ProjectCard: React.FC<CardProps> = ({ 
  title, 
  image, 
  technologies, 
  description, 
  link, 
  github, 
  demoLink 
}) => {
  const techArray = Array.isArray(technologies) ? technologies : [technologies];

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column' }}>
          <div className="card-img-container" style={{ height: '80%' }}>
            <img src={image} alt={title} className="card-img" loading="lazy" />
          </div>
          <div className="card-content" style={{ backgroundColor: 'transparent', height: '20%', padding: '15px' }}>
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-tech">
              {techArray.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="card-links">
              {(link || github) && (
                <a 
                  href={link || github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="card-link-single"
                  aria-label={`View ${title} project`}
                >
                  View
                </a>
              )}
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="card-link-single"
                  aria-label={`View ${title} demo`}
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;