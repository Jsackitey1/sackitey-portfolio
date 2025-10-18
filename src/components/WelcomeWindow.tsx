import React, { useState, useEffect } from 'react';
import './WelcomeWindow.css';

interface WelcomeWindowProps {
  onClose: () => void;
}

const WelcomeWindow: React.FC<WelcomeWindowProps> = ({ onClose }) => {
  const [showWelcomeNextTime, setShowWelcomeNextTime] = useState(true);

  // Check if user has visited before
  useEffect(() => {
    const hasVisited = localStorage.getItem('portfolio-visited');
    if (hasVisited === 'true') {
      setShowWelcomeNextTime(false);
    }
  }, []);

  const handleClose = () => {
    // Save user preference
    if (!showWelcomeNextTime) {
      localStorage.setItem('portfolio-visited', 'true');
    }
    onClose();
  };

  const handleTipClick = () => {
    // Cycle through different tips
    const tips = [
      "You can drag desktop icons around to organize them!",
      "Double-click any desktop icon to open that section of the portfolio.",
      "Right-click on windows to bring them to the front.",
      "Try the Games collection for some classic Windows 95 entertainment!",
      "The taskbar shows all your open windows and the current time.",
      "Press the Start button to access the main navigation menu.",
      "All windows can be moved, resized, and minimized just like Windows 95!",
      "Check out the Projects section to see my latest work and code samples."
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const tipElement = document.querySelector('.welcome-tip-text');
    if (tipElement) {
      tipElement.textContent = randomTip;
    }
  };


  return (
    <div className="welcome-window">
      <div className="welcome-title-bar">
        <span className="welcome-title-text">Welcome</span>
        <button className="welcome-close-btn" onClick={handleClose}>×</button>
      </div>
      
      <div className="welcome-content">
        <div className="welcome-left-panel">
          <div className="welcome-header">
            <h1>Welcome to Joseph Sackitey's Portfolio</h1>
            <p className="welcome-subtitle">A Windows 95 Themed Web Experience</p>
          </div>
          
          <div className="welcome-tip-section">
            <div className="welcome-tip-header">
              <span className="welcome-lightbulb">💡</span>
              <span className="welcome-tip-label">Did you know...</span>
            </div>
            <p className="welcome-tip-text">
              You can drag desktop icons around to organize them!
            </p>
            <button className="welcome-next-tip-btn" onClick={handleTipClick}>
              Next Tip
            </button>
          </div>
          
          <div className="welcome-checkbox">
            <input 
              type="checkbox" 
              id="showWelcome" 
              checked={showWelcomeNextTime}
              onChange={(e) => setShowWelcomeNextTime(e.target.checked)}
            />
            <label htmlFor="showWelcome">
              Show this Welcome Screen next time you visit
            </label>
          </div>
        </div>
        
        <div className="welcome-right-panel">
          <div className="welcome-actions">
            <button className="welcome-action-btn" onClick={() => document.querySelector('.desktop-icon[title="About Me"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }))}>
              👤 About Me
            </button>
            <button className="welcome-action-btn" onClick={() => document.querySelector('.desktop-icon[title="Experience"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }))}>
              💼 Experience
            </button>
            <button className="welcome-action-btn" onClick={() => document.querySelector('.desktop-icon[title="Projects"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }))}>
              🚀 Projects
            </button>
            <button className="welcome-action-btn" onClick={() => document.querySelector('.desktop-icon[title="Games"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }))}>
              🎮 Games
            </button>
            <button className="welcome-action-btn" onClick={() => window.open('https://www.linkedin.com/in/joseph-sackitey/', '_blank')}>
              💼 LinkedIn
            </button>
            <button className="welcome-action-btn" onClick={() => window.open('https://github.com/Jsackitey1', '_blank')}>
              🐙 GitHub
            </button>
          </div>
          
          <div className="welcome-footer">
            <button className="welcome-close-main-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeWindow;
