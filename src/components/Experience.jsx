import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container" id="experience-section">
      <h2 className="section-title">Experiences</h2>
      
      <div className="experience-content">
        {/* Left section - Journey description */}
        <div className="journey-section">
          <p className="journey-text">
            My journey in computer science and technology has equipped me with the skills to build impactful solutions, from developing full-stack applications to contributing to open-source projects. My hands-on experience spans software engineering, AI development, and sustainability initiatives. Whether optimizing user experiences, designing intelligent systems, or leading community-driven tech initiatives, my commitment to innovation and problem-solving is evident in every project I undertake.
          </p>
        </div>

        {/* Right section - Experiences list */}
        <div className="experiences-list">
          <div className="experience-item">
            <h3 className="role">Google STEP Intern &nbsp;&nbsp;&nbsp;&nbsp; May 2025 - August 2025</h3>
            <h4 className="company">Google, &nbsp;&nbsp;&nbsp;&nbsp; San Francisco,CA</h4>
            <p className="description">
            </p>
          </div>

          <div className="experience-separator"></div>

          <div className="experience-item">
            <h3 className="role">Oyster (Open Source) Contributor &nbsp;&nbsp;&nbsp;&nbsp; Nov 2025 - Present</h3>
            <h4 className="company">ColorStack &nbsp;&nbsp;&nbsp;&nbsp; Remote</h4>
            <p className="description">
              Utilize Git and GitHub for version control to contribute to the Oyster open-source project, resolving issues and proposing innovative ideas to improve and enhance the ColorStack website.
            </p>
          </div>

          <div className="experience-separator"></div>

          <div className="experience-item">
            <h3 className="role">HeadStarter AI SWE Fellow &nbsp;&nbsp;&nbsp;&nbsp; June 2024 - August 2024</h3>
            <h4 className="company">HeadStarter &nbsp;&nbsp;&nbsp;&nbsp; Remote</h4>
            <p className="description">
              Built 2 AI apps and APIs using Next.js, OpenAI, Pinecone, and StripeAPI that significantly streamlined the development process, and enhanced the overall user engagement.
            </p>
          </div>

          <div className="experience-separator"></div>

          <div className="experience-item">
            <h3 className="role">Sustainability Intern &nbsp;&nbsp;&nbsp;&nbsp; May 2024 - August 2024</h3>
            <h4 className="company">Gettysburg College &nbsp;&nbsp;&nbsp;&nbsp; Gettysburg, PA</h4>
            <p className="description">
              Designed and implemented a campus map of water fountain stations to improve accessibility, promote sustainability, and reduce plastic waste by encouraging the use of refillable water bottles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;