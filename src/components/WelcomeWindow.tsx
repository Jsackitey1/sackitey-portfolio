import React from 'react';
import './WelcomeWindow.css';

interface WelcomeWindowProps {
  onClose: () => void;
}

const WelcomeWindow: React.FC<WelcomeWindowProps> = ({ onClose }) => {

  const handleClose = () => {
    onClose();
  };

  const handleTipClick = () => {
    // Cycle through different tips
    const tips = [
      "This portfolio looks best on a desktop or laptop computer for the full Windows 95 experience!",
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

  const handleActionClick = (action: () => void) => {
    // Close the welcome window first, then execute the action
    onClose();
    // Use setTimeout to ensure the welcome window closes before opening other windows
    setTimeout(action, 100);
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
              This portfolio looks best on a desktop or laptop computer for the full Windows 95 experience!
            </p>
            <button className="welcome-next-tip-btn" onClick={handleTipClick}>
              Next Tip
            </button>
          </div>
          
        </div>
        
        <div className="welcome-right-panel">
          <div className="welcome-actions">
            <button className="welcome-action-btn" onClick={() => handleActionClick(() => document.querySelector('.desktop-icon[title="About Me"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true })))}>
              👤 About Me
            </button>
            <button className="welcome-action-btn" onClick={() => handleActionClick(() => document.querySelector('.desktop-icon[title="Experience"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true })))}>
              💼 Experience
            </button>
            <button className="welcome-action-btn" onClick={() => handleActionClick(() => document.querySelector('.desktop-icon[title="Projects"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true })))}>
              🚀 Projects
            </button>
            <button className="welcome-action-btn" onClick={() => handleActionClick(() => document.querySelector('.desktop-icon[title="Games"]')?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true })))}>
              🎮 Games
            </button>
            <button className="welcome-action-btn" onClick={() => handleActionClick(() => window.open('https://www.linkedin.com/in/joseph-sackitey/', '_blank'))}>
              💼 LinkedIn
            </button>
            <button className="welcome-action-btn" onClick={() => handleActionClick(() => window.open('https://github.com/Jsackitey1', '_blank'))}>
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
