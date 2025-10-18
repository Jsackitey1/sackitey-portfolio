import React, { useState, useCallback, useRef, Suspense, lazy } from 'react';
import './Desktop.css';
import DesktopIcon from './DesktopIcon';

// Lazy load portfolio components
const AboutPage = lazy(() => import('./AboutPage'));
const Experience = lazy(() => import('./Experience'));
const EnhancedProjects = lazy(() => import('./EnhancedProjects'));
const TechStacks = lazy(() => import('./TechStacks'));
const Blog = lazy(() => import('./Blog'));
const ContactForm = lazy(() => import('./ContactForm'));

interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface DesktopIcon {
  id: string;
  title: string;
  icon: string;
  x: number;
  y: number;
  content: React.ReactNode;
}

interface DesktopProps {
  children?: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const desktopRef = useRef<HTMLDivElement>(null);

  // Desktop icons configuration with clearer, professional icons
  const desktopIcons: DesktopIcon[] = [
    {
      id: 'about',
      title: 'About Me',
      icon: '👨‍💻',
      x: 50,
      y: 50,
      content: (
        <Suspense fallback={<div className="loading">Loading About...</div>}>
          <AboutPage />
        </Suspense>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: '💼',
      x: 50,
      y: 150,
      content: (
        <Suspense fallback={<div className="loading">Loading Experience...</div>}>
          <Experience />
        </Suspense>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: '💻',
      x: 50,
      y: 250,
      content: (
        <Suspense fallback={<div className="loading">Loading Projects...</div>}>
          <EnhancedProjects />
        </Suspense>
      )
    },
    {
      id: 'tech',
      title: 'Tech Stack',
      icon: '⚙️',
      x: 50,
      y: 350,
      content: (
        <Suspense fallback={<div className="loading">Loading Tech Stack...</div>}>
          <TechStacks />
        </Suspense>
      )
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: '📰',
      x: 50,
      y: 450,
      content: (
        <Suspense fallback={<div className="loading">Loading Blog...</div>}>
          <Blog />
        </Suspense>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: '📞',
      x: 50,
      y: 550,
      content: (
        <Suspense fallback={<div className="loading">Loading Contact...</div>}>
          <ContactForm />
        </Suspense>
      )
    },
    {
      id: 'resume',
      title: 'Resume',
      icon: '📄',
      x: 200,
      y: 50,
      content: null // Will be handled by direct PDF opening
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      icon: '💼',
      x: 200,
      y: 150,
      content: null // Will be handled by direct link opening
    },
    {
      id: 'github',
      title: 'GitHub',
      icon: '🐙',
      x: 200,
      y: 250,
      content: null // Will be handled by direct link opening
    }
  ];

  // Window title mapping for better program names
  const getWindowTitle = (id: string): string => {
    const titleMap: { [key: string]: string } = {
      'about': 'PROFILE.EXE',
      'experience': 'EXPERIENCE.EXE', 
      'projects': 'PORTFOLIO.EXE',
      'tech': 'SKILLS.EXE',
      'blog': 'BLOG.EXE',
      'contact': 'CONTACT.EXE',
      'resume': 'RESUME.EXE'
    };
    return titleMap[id] || `${id.toUpperCase()}.EXE`;
  };

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindow = useCallback((icon: DesktopIcon) => {
    // Special handling for resume - open PDF directly
    if (icon.id === 'resume') {
      window.open('/assets/Joseph_Sackitey_Resume.pdf', '_blank');
      setShowStartMenu(false);
      return;
    }

    // Special handling for LinkedIn - open LinkedIn profile
    if (icon.id === 'linkedin') {
      window.open('https://www.linkedin.com/in/joseph-sackitey/', '_blank');
      setShowStartMenu(false);
      return;
    }

    // Special handling for GitHub - open GitHub profile
    if (icon.id === 'github') {
      window.open('https://github.com/josephsackitey', '_blank');
      setShowStartMenu(false);
      return;
    }

    const existingWindow = windows.find(w => w.id === icon.id);
    
    if (existingWindow) {
      // Bring existing window to front
      setWindows(prev => prev.map(w => 
        w.id === icon.id 
          ? { ...w, isMinimized: false, zIndex: nextZIndex }
          : w
      ));
    } else {
      // Create new window
      const newWindow: Window = {
        id: icon.id,
        title: icon.title,
        content: icon.content,
        x: Math.random() * 200 + 100,
        y: Math.random() * 200 + 100,
        width: 600,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        zIndex: nextZIndex
      };
      
      setWindows(prev => [...prev, newWindow]);
    }
    
    setNextZIndex(prev => prev + 1);
    setShowStartMenu(false);
  }, [windows, nextZIndex]);

  const closeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.filter(w => w.id !== windowId));
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const maximizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  }, []);

  const bringToFront = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { ...w, zIndex: nextZIndex }
        : w
    ));
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const startDrag = useCallback((windowId: string, e: React.MouseEvent) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setDraggedWindow(windowId);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    bringToFront(windowId);
  }, [windows, bringToFront]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!draggedWindow) return;

    const desktopRect = desktopRef.current?.getBoundingClientRect();
    if (!desktopRect) return;

    const newX = e.clientX - desktopRect.left - dragOffset.x;
    const newY = Math.max(0, e.clientY - desktopRect.top - dragOffset.y);

    setWindows(prev => prev.map(w => 
      w.id === draggedWindow 
        ? { ...w, x: Math.max(0, newX), y: newY }
        : w
    ));
  }, [draggedWindow, dragOffset]);

  const stopDrag = useCallback(() => {
    setDraggedWindow(null);
  }, []);

  React.useEffect(() => {
    if (draggedWindow) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDrag);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopDrag);
      };
    }
  }, [draggedWindow, handleMouseMove, stopDrag]);

  const handleDesktopClick = useCallback(() => {
    setShowStartMenu(false);
  }, []);

  return (
    <div 
      ref={desktopRef}
      className="desktop"
      onClick={handleDesktopClick}
    >
      {/* Desktop Icons */}
      {desktopIcons.map((icon) => (
        <div
          key={icon.id}
          className="desktop-icon"
          style={{ left: icon.x, top: icon.y }}
          onDoubleClick={() => openWindow(icon)}
          title={icon.title}
        >
          <div className="desktop-icon-image">
            <DesktopIcon icon={icon.id} size={32} />
          </div>
          <div className="desktop-icon-label">
            {icon.title}
          </div>
        </div>
      ))}

      {/* Windows */}
      {windows.map((window) => (
        <div
          key={window.id}
          className={`window ${window.isMinimized ? 'minimized' : ''} ${window.isMaximized ? 'maximized' : ''}`}
          style={{
            left: window.isMaximized ? 0 : window.x,
            top: window.isMaximized ? 0 : window.y,
            width: window.isMaximized ? '100vw' : window.width,
            height: window.isMaximized ? 'calc(100vh - 32px)' : window.height,
            zIndex: window.zIndex
          }}
          onClick={() => bringToFront(window.id)}
        >
          <div 
            className="window-title-bar"
            onMouseDown={(e) => startDrag(window.id, e)}
          >
            <div className="window-title">
              {getWindowTitle(window.id)}
            </div>
            <div className="window-controls">
              <button 
                className="window-control minimize"
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(window.id);
                }}
                title="Minimize"
              >
                _
              </button>
              <button 
                className="window-control maximize"
                onClick={(e) => {
                  e.stopPropagation();
                  maximizeWindow(window.id);
                }}
                title="Maximize"
              >
                □
              </button>
              <button 
                className="window-control close"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(window.id);
                }}
                title="Close"
              >
                ×
              </button>
            </div>
          </div>
          <div 
            className="window-content"
            onMouseDown={(e) => startDrag(window.id, e)}
          >
            {window.content}
          </div>
        </div>
      ))}

      {/* Taskbar */}
      <div className="taskbar">
        <button 
          className="start-button"
          onClick={(e) => {
            e.stopPropagation();
            setShowStartMenu(!showStartMenu);
          }}
        >
          <span className="start-logo">🪟</span>
          Start
        </button>


        {/* Taskbar buttons for open windows */}
        {windows.filter(w => !w.isMinimized).map((window) => (
          <button
            key={window.id}
            className={`taskbar-button ${window.zIndex === Math.max(...windows.map(w => w.zIndex)) ? 'active' : ''}`}
            onClick={() => bringToFront(window.id)}
            title={getWindowTitle(window.id)}
          >
            {getWindowTitle(window.id)}
          </button>
        ))}

        <div className="taskbar-clock">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="start-menu">
          <div className="start-menu-header">
            <span className="start-menu-logo">🪟</span>
            <span className="start-menu-title">Windows 95</span>
          </div>
          <div className="start-menu-items">
            {desktopIcons.map((icon) => (
              <button
                key={icon.id}
                className="start-menu-item"
                onClick={() => openWindow(icon)}
              >
                <span className="start-menu-icon">
                  <DesktopIcon icon={icon.id} size={12} />
                </span>
                <span className="start-menu-text">{icon.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Original content for fallback */}
      {children}
    </div>
  );
};

export default Desktop;
