import React, { useState, useEffect } from 'react';
import './Navigation.css';

interface NavigationProps {
  currentSection?: string;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about-section' },
    { id: 'experience', label: 'Experience', href: '#experience-section' },
    { id: 'projects', label: 'Projects', href: '#projects-section' },
    { id: 'tech', label: 'Tech Stack', href: '#techstack-section' },
    { id: 'contact', label: 'Contact', href: '#contact-section' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section, div[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        if (element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(element.id || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string): void => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = (): void => {
    const link = document.createElement('a');
    link.href = '/sackitey-portfolio/assets/Joseph_Sackitey_Resume.pdf';
    link.download = 'Joseph_Sackitey_Resume.pdf';
    link.click();
  };

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <button 
            onClick={() => scrollToSection('#home')}
            className="logo-btn"
            aria-label="Go to home"
          >
            JS
          </button>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollToSection(item.href)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button 
          onClick={downloadResume}
          className="resume-btn"
          aria-label="Download Resume"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navigation;