import React from 'react';
import './Fproject.css';

const Fproject = () => {
  const projects = [
    {
      id: 1,
      title: "LinkLibrary",
      description: "A bookmark management application built with React, Node.js, and MongoDB. It allows users to organize and categorize their bookmarks with tags and search functionality.",
      tools: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      image: "/sackitey-portfolio/projects/linklibrary.gif",
      github: "https://github.com/Jsackitey1/LinkLibrary",
      live: "https://linklibrary-app.netlify.app"
    },
    {
      id: 2,
      title: "Bionic Arm Control System",
      description: "A prosthetic arm control system using machine learning to interpret EMG signals. Developed the signal processing algorithms and the ML model for gesture recognition.",
      tools: ["Python", "TensorFlow", "Arduino", "C++", "Signal Processing"],
      image: "/sackitey-portfolio/projects/Bionic Arm.gif",
      github: "https://github.com/Jsackitey1/bionic-arm"
    }
  ];

  return (
    <div className="projects-container" id="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Some of my recent work that showcases my skills and passion</p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <Card 
            key={project.id}
            title={project.title}
            image={project.image}
            technologies={project.tools}
            description={project.description}
            link={project.github}
          />
        ))}
      </div>
    </div>
  );
};

// Card component for flip effect
const Card = ({ title, image, technologies, description, link }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column' }}>
          <div className="card-img-container" style={{ height: '80%' }}>
            <img src={image} alt={title} className="card-img" />
          </div>
          <div className="card-content" style={{ backgroundColor: 'transparent', height: '20%', padding: '15px' }}>
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-links">
              <a href={link} target="_blank" rel="noopener noreferrer" className="card-link-single">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 350px;
    perspective: 1000px;
    margin-bottom: 30px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
  }

  .flip-card-front {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
    background-color: #171717;
  }

  .flip-card-back {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
    background-color: #171717;
    transform: rotateY(180deg);
  }`;

export default Fproject;