import React from 'react';
import './Fproject.css';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const Sproject: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Twitter Trend Analyzer",
      description: "A modern web application that provides real-time AI-powered summaries of trending topics on Twitter. The app fetches current trending topics and uses OpenAI to generate concise summaries of the conversations happening around each trend.",
      technologies: "React, Axios, OpenAI API",
      image: "/sackitey-portfolio/projects/Twitter  trend app.png",
      link: "https://github.com/Jsackitey1/twitter-summary-app.git",
      tags: ["web", "ai", "api"]
    },
    {
      id: 2,
      title: "Brick Breaker Game",
      description: "Developed a 2D interactive Brick Breaker game in Java, utilizing Swing for UI components, with robust collision detection algorithms and a real-time scoring system to enhance user experience.",
      technologies: "Java, Swing",
      image: "/sackitey-portfolio/projects/Brick breaker.png",
      link: "https://github.com/Jsackitey1/brickBraker.git",
      tags: ["game", "java"]
    }
  ];

  return (
    <div className="projects-container" id="secondary-projects-section">
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            image={project.image}
            technologies={project.technologies || ""}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Sproject;