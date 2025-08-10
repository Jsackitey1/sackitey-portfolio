import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AboutPage.css';
import ProfileCard from './ProfileCard';
import EducationTimeline from './EducationTimeline';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' }
  ];

  return (
    <div id="about-section" className="about-page">
      <div className="about-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-header"
      >
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Discover my journey, background, and passion for technology and innovation
        </p>
      </motion.div>

      <div className="about-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-label={`Switch to ${tab.label} tab`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="about-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ display: activeTab === 'profile' ? 'block' : 'none' }}
          >
            {activeTab === 'profile' && <ProfileCard />}
          </motion.div>

          <motion.div
            key={activeTab + '_education'}
            className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ display: activeTab === 'education' ? 'block' : 'none' }}
          >
            {activeTab === 'education' && <EducationTimeline />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutPage;
