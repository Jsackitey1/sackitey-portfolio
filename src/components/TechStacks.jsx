import React from 'react';
import './TechStacks.css';

const TechStacks = () => {
  return (
    <div className="tech-container" id="techstack-section">
      <h1 className="tech-title">My Tech Stack</h1>
      
      <div className="tech-content">
        <div className="tech-lists">
          <div className="tech-column">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>SQL</li>
              <li>Mathematica</li>
            </ul>
          </div>
          
          <div className="tech-column">
            <h3>Technologies & Frameworks</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          
          <div className="tech-column">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MATLAB</li>
              <li>Mathematica</li>
            </ul>
          </div>
          
          <div className="tech-column">
            <h3>Areas of Expertise</h3>
            <ul>
              <li>Software development</li>
              <li>Web development</li>
              <li>Game development</li>
              <li>Sustainability & mapping applications</li>
            </ul>
          </div>
        </div>
        
        <div className="cube-container">
          <div id="cube">
            <div className="front">
              <img src='https://svgshare.com/i/MiB.svg' title='html' width="100%" alt="HTML" />
            </div>
            <div className="back">
              <img src='https://svgshare.com/i/Mgn.svg' title='css' width="100%" alt="CSS" />
            </div>
            <div className="right">
              <img src='https://svgshare.com/i/MiM.svg' title='js' width="100%" alt="JavaScript" />
            </div>
            <div className="left">
              <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' title='github' width="100%" alt="GitHub" />
            </div>
            <div className="top">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" width="80%" alt="C#" />
            </div>
            <div className="bottom">
              <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="java" width="55%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;