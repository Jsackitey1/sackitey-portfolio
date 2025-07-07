import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'about', label: 'About', href: '#about-section', icon: '👤' },
    { id: 'experience', label: 'Experience', href: '#experience-section', icon: '💼' },
    { id: 'projects', label: 'Projects', href: '#projects-section', icon: '🚀' },
    { id: 'tech', label: 'Tech Stack', href: '#techstack-section', icon: '⚡' },
    { id: 'blog', label: 'Blog', href: '#blog-section', icon: '📝' }
  ];

  // Improved section scrolling with better error handling
  const scrollToSection = useCallback((href: string): void => {
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    
    // Provide immediate visual feedback
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Add a temporary highlight to show the target
      targetElement.style.transition = 'box-shadow 0.3s ease';
      targetElement.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
      
      setTimeout(() => {
        targetElement.style.boxShadow = '';
      }, 2000);
    }
    
    // First, try immediate approach with hash navigation
    const immediateScroll = () => {
      // Set the hash to trigger any hash-based navigation
      window.location.hash = targetId;
      
      // Update active section immediately for better UX
      setActiveSection(targetId);
      
      // Try to find the element immediately
      const element = document.getElementById(targetId);
      
      if (element) {
        // Calculate offset for fixed navigation bar
        const navHeight = navRef.current?.offsetHeight || 0;
        const elementTop = element.offsetTop;
        const scrollPosition = elementTop - navHeight - 20; // 20px buffer
        
        // Use window.scrollTo for more precise control
        window.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
        
        // Verify scroll happened
        setTimeout(() => {
          const currentScroll = window.scrollY;
          const expectedScroll = Math.max(0, scrollPosition);
          
          // If scroll didn't happen as expected, try again
          if (Math.abs(currentScroll - expectedScroll) > 50) {
            window.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            });
          }
          
          try {
            element.focus();
          } catch {
            // Focus failed silently
          }
          setIsLoading(false);
        }, 1000);
        
        return true;
      }
      
      return false;
    };
    
    // Try immediate approach first
    if (!immediateScroll()) {
      // If immediate approach fails, use retry mechanism
      const attemptScroll = (retryCount = 0) => {
        const element = document.getElementById(targetId);
        
        if (element && element.offsetHeight > 0) {
          // Calculate offset for fixed navigation bar
          const navHeight = navRef.current?.offsetHeight || 0;
          const elementTop = element.offsetTop;
          const scrollPosition = elementTop - navHeight - 20; // 20px buffer
          
          // Use window.scrollTo for more precise control
          window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
          });
          
          // Verify scroll happened
          setTimeout(() => {
            const currentScroll = window.scrollY;
            const expectedScroll = Math.max(0, scrollPosition);
            
            // If scroll didn't happen as expected, try again
            if (Math.abs(currentScroll - expectedScroll) > 50) {
              window.scrollTo({
                top: Math.max(0, scrollPosition),
                behavior: 'smooth'
              });
            }
            
            try {
              element.focus();
            } catch {
              // Focus failed silently
            }
            setIsLoading(false);
          }, 1000);
          
          return true;
        } else {
          // If we haven't exceeded retry limit, try again
          if (retryCount < 15) {
            setTimeout(() => attemptScroll(retryCount + 1), 300);
            return false;
          } else {
            // Fallback: Try to scroll to approximate position based on section order
            const sectionOrder = ['about-section', 'experience-section', 'projects-section', 'techstack-section', 'blog-section'];
            const targetIndex = sectionOrder.indexOf(targetId);
            
            if (targetIndex !== -1) {
              // Calculate approximate position (each section is roughly 100vh)
              const navHeight = navRef.current?.offsetHeight || 0;
              const approximatePosition = (targetIndex + 1) * window.innerHeight - navHeight - 20;
              
              window.scrollTo({
                top: Math.max(0, approximatePosition),
                behavior: 'smooth'
              });
              
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            } else {
              setIsLoading(false);
            }
            
            return false;
          }
        }
      };
      
      // Start the retry process
      attemptScroll();
    }
  }, []);

  // Improved scroll handling with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    setIsVisible(scrollY > 100);
    
    // Calculate scroll progress
    const progress = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollProgress(Math.min(progress, 100));
    
    // Update active section based on scroll position
    const sections = document.querySelectorAll('section, div[id*="-section"], div[id="about-section"], div[id="experience-section"], div[id="projects-section"], div[id="techstack-section"], div[id="blog-section"]');
    const scrollPosition = scrollY + 100;

    let currentSection = 'home';
    let minDistance = Infinity;

    sections.forEach((section) => {
      const element = section as HTMLElement;
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;
      
      // Check if section is in view
      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        const distance = Math.abs(scrollPosition - elementTop);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = element.id || 'home';
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [activeSection]);

  // Improved keyboard handling
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Touch handling for mobile menu
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!mobileMenuRef.current) return;
    
    const touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const deltaX = startX - touch.clientX;
      const deltaY = startY - touch.clientY;
      
      // If horizontal swipe is greater than vertical and significant
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) { // Swipe left - close menu
          setIsMobileMenuOpen(false);
        }
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
  }, []);

  useEffect(() => {
    // Set up MutationObserver to watch for when sections are added to the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              // Check if any of our target sections were added
              navItems.forEach(item => {
                const targetId = item.href.replace('#', '');
                if (element.id === targetId || element.querySelector(`#${targetId}`)) {
                  // Section added to DOM
                }
              });
            }
          });
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Verify all sections are accessible on mount
    const verifySections = () => {
      let allFound = true;
      navItems.forEach(item => {
        const targetId = item.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (!element) allFound = false;
      });
      
      // If not all sections are found, try again
      if (!allFound) {
        setTimeout(verifySections, 1000);
      }
    };

    // Try multiple times with increasing delays to account for lazy loading
    setTimeout(verifySections, 100);
    setTimeout(verifySections, 500);
    setTimeout(verifySections, 1000);
    setTimeout(verifySections, 2000);
    setTimeout(verifySections, 3000);

    // Cleanup observer
    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleKeyDown]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      
      // Focus management
      const firstButton = mobileMenuRef.current?.querySelector('button');
      if (firstButton) {
        (firstButton as HTMLElement).focus();
      }
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('touchstart', handleTouchStart);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isMobileMenuOpen, handleTouchStart]);

  const toggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleKeyNavigation = useCallback((e: React.KeyboardEvent, href: string): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(href);
    }
  }, [scrollToSection]);

  const handleOverlayClick = useCallback((): void => {
    setIsMobileMenuOpen(false);
  }, []);

  const downloadResume = useCallback((): void => {
    window.open('/sackitey-portfolio/assets/Joseph_Sackitey_Resume.pdf', '_blank');
  }, []);

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
            aria-haspopup="true"
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
            aria-label="View Resume"
            title="View my resume"
          >
            <span className="resume-icon" aria-hidden="true">📄</span>
            Resume
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    onKeyDown={(e) => handleKeyNavigation(e, item.href)}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    aria-label={`Navigate to ${item.label}`}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    style={{ animationDelay: `${index * 0.1}s` }}
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
              aria-label="View Resume"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <span className="resume-icon" aria-hidden="true">📄</span>
              View Resume
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            ref={overlayRef}
            className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;