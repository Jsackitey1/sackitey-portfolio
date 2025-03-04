import React from 'react';
import './Fproject.css';

const Sproject = () => {
  const projects = [
    {
      id: 1,
      title: "Twitter Trend Analyzer",
      description: "A modern web application that provides real-time AI-powered summaries of trending topics on Twitter. The app fetches current trending topics and uses OpenAI to generate concise summaries of the conversations happening around each trend.",
      technologies: "React, Axios for API calls",
      image: "/sackitey-portfolio/projects/Twitter  trend app.png",
      link: "https://github.com/Jsackitey1/twitter-summary-app.git"
    },
    {
      id: 2,
      title: "Brick Breaker Game",
      description: "Developed a 2D interactive Brick Breaker game in Java, utilizing Swing for UI components, with robust collision detection algorithms and a real-time scoring system to enhance user experience.",
      technologies: "Java",
      image: "/sackitey-portfolio/projects/Brick breaker.png",
      link: "https://github.com/Jsackitey1/brickBraker.git"
    }
  ];

  return (
    <div className="projects-container" id="secondary-projects-section">
    
      <div className="projects-grid">
        {projects.map(project => (
          <Card 
            key={project.id}
            title={project.title}
            image={project.image}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
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
    background-color: transparent;
  }

  .flip-card-back {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
    background-color: #171717;
    transform: rotateY(180deg);
  }`;

export default Sproject;