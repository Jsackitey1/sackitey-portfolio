import React from 'react';
import './TechStacks.css';
import { TechStack } from '../types';

const TechStacks: React.FC = () => {
  const techStacks: TechStack[] = [
    {
      category: "Languages",
      items: ["Java", "C#", "Python", "JavaScript", "HTML & CSS", "SQL", "Mathematica"]
    },
    {
      category: "Technologies & Frameworks",
      items: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git & GitHub", "MongoDB", "PostgreSQL", "MATLAB", "Mathematica"]
    },
    {
      category: "Areas of Expertise",
      items: ["Software development", "Web development", "Game development", "Sustainability & mapping applications"]
    }
  ];

  const cubeImages = [
    { src: 'https://svgshare.com/i/MiB.svg', alt: 'HTML', title: 'html' },
    { src: 'https://svgshare.com/i/Mgn.svg', alt: 'CSS', title: 'css' },
    { src: 'https://svgshare.com/i/MiM.svg', alt: 'JavaScript', title: 'js' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', alt: 'GitHub', title: 'github' },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png", alt: 'C#', title: 'csharp' },
    { src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", alt: 'Java', title: 'java' }
  ];

  return (
    <div className="tech-container" id="techstack-section">
      <h1 className="tech-title">My Tech Stack</h1>
      
      <div className="tech-content">
        <div className="tech-lists">
          {techStacks.map((stack, index) => (
            <div key={index} className="tech-column">
              <h3>{stack.category}</h3>
              <ul>
                {stack.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="cube-container">
          <div id="cube">
            <div className="front">
              <img 
                src={cubeImages[0].src} 
                title={cubeImages[0].title} 
                width="100%" 
                alt={cubeImages[0].alt}
                loading="lazy"
              />
            </div>
            <div className="back">
              <img 
                src={cubeImages[1].src} 
                title={cubeImages[1].title} 
                width="100%" 
                alt={cubeImages[1].alt}
                loading="lazy"
              />
            </div>
            <div className="right">
              <img 
                src={cubeImages[2].src} 
                title={cubeImages[2].title} 
                width="100%" 
                alt={cubeImages[2].alt}
                loading="lazy"
              />
            </div>
            <div className="left">
              <img 
                src={cubeImages[3].src} 
                title={cubeImages[3].title} 
                width="100%" 
                alt={cubeImages[3].alt}
                loading="lazy"
              />
            </div>
            <div className="top">
              <img 
                src={cubeImages[4].src} 
                width="80%" 
                alt={cubeImages[4].alt}
                loading="lazy"
              />
            </div>
            <div className="bottom">
              <img 
                src={cubeImages[5].src} 
                alt={cubeImages[5].alt} 
                width="55%"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;