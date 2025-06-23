import React, { useState } from 'react';
import './Fproject.css';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const Fproject: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "LinkLibrary",
      description: "Link Library is a modern web application that helps users organize and manage their web resources efficiently. Built with React and Firebase, it provides a secure and user-friendly platform for saving, categorizing, and accessing web resources like articles, tutorials, documentation, and other valuable links.",
      tools: ["React", "Firebase", "TypeScript"],
      image: "/sackitey-portfolio/projects/linklibrary.gif",
      github: "https://github.com/Jsackitey1/link-library.git",
      tags: ["web", "react", "firebase"]
    },
    {
      id: 2,
      title: "Bluetooth Controlled Robotic Arm",
      description: "Engineered a 3D-printed Bluetooth-controlled robotic prosthesis, integrating with an Android app using Java and Kotlin for seamless remote control and sensory feedback via Bluetooth sensors.",
      tools: ["Python", "Arduino", "Kotlin", "Java"],
      image: "/sackitey-portfolio/projects/Bionic Arm.gif",
      github: "https://github.com/Jsackitey1/Bionic-Arm.git",
      tags: ["iot", "mobile", "hardware"]
    }
  ];

  const allTags = ['all', ...Array.from(new Set(projects.flatMap(p => p.tags || [])))];

  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(p => p.tags?.includes(selectedTag));

  return (
    <div className="projects-container" id="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Some of my recent work that showcases my skills and passion</p>
      
      <div className="project-filters">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
            aria-label={`Filter by ${tag}`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            image={project.image}
            technologies={project.tools || []}
            description={project.description}
            link={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Fproject;