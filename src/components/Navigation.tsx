import React, { useState, useEffect, useRef } from 'react';
import './Navigation.css';

interface NavigationProps {
  currentSection?: string;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { id: 'about', label: 'About', href: '#about-section', icon: '👤' },
    { id: 'experience', label: 'Experience', href: '#experience-section', icon: '💼' },
    { id: 'projects', label: 'Projects', href: '#projects-section', icon: '🚀' },
    { id: 'tech', label: 'Tech Stack', href: '#techstack-section', icon: '⚡' },
    { id: 'blog', label: 'Blog', href: '#blog-section', icon: '📝' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsVisible(scrollY > 100);
      
      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section, div[id]');
      const scrollPosition = scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        if (element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(element.id || 'home');
        }
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string): void => {
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Add focus for accessibility
      setTimeout(() => {
        element.focus();
        setIsLoading(false);
      }, 500);
    } else {
      setIsLoading(false);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyNavigation = (e: React.KeyboardEvent, href: string): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  const downloadResume = (): void => {
    const link = document.createElement('a');
    link.href = '/sackitey-portfolio/assets/Joseph_Sackitey_Resume.pdf';
    link.download = 'Joseph_Sackitey_Resume.pdf';
    link.click();
  };

  return (
    <>
      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <nav 
        ref={navRef}
        className={`navigation ${isVisible ? 'visible' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Progress indicator */}
        <div 
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
        
        <div className="nav-container">
          
          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyNavigation(e, item.href)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''} ${isLoading ? 'loading' : ''}`}
                  aria-label={`Navigate to ${item.label}`}
                  title={item.label}
                  tabIndex={0}
                >
                  <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <button 
            onClick={downloadResume}
            className="resume-btn"
            aria-label="Download Resume"
            title="Download my resume"
          >
            <span className="resume-icon" aria-hidden="true">📄</span>
            Resume
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    onKeyDown={(e) => handleKeyNavigation(e, item.href)}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    aria-label={`Navigate to ${item.label}`}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    <span className="mobile-nav-icon" aria-hidden="true">{item.icon}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={downloadResume}
              className="mobile-resume-btn"
              aria-label="Download Resume"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <span className="resume-icon" aria-hidden="true">📄</span>
              Download Resume
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;