import React, { useState } from 'react';
import './AboutPage.css';
import ProfileCard from './ProfileCard';
import EducationTimeline from './EducationTimeline';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'education'>('profile');

  return (
    <div id="about-section" className="about-page">
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Discover my journey, education, and passion for technology and innovation
        </p>
      </div>

      <div className="about-tabs">
        <button 
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
          aria-label="View Profile Information"
        >
          <span className="tab-icon">👤</span>
          Profile & Background
        </button>
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
          aria-label="View Education Timeline"
        >
          <span className="tab-icon">🎓</span>
          Education Journey
        </button>
      </div>

      <div className="about-content">
        <div className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}>
          <ProfileCard />
        </div>
        
        <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
          <EducationTimeline />
        </div>
      </div>

      <div className="about-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </div>
  );
};

export default AboutPage;