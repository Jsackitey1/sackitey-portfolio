import React from 'react';

interface DesktopIconProps {
  icon: string;
  size?: number;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, size = 32 }) => {
  // Define SVG icons for better clarity with white color for desktop visibility
  const svgIcons: { [key: string]: React.ReactNode } = {
    'about': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M16 16c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 3c-4 0-12 2-12 6v3h24v-3c0-4-8-6-12-6z"/>
      </svg>
    ),
    'experience': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M26 8h-3l-3-3H12L9 8H6c-1.5 0-3 1.5-3 3v16c0 1.5 1.5 3 3 3h20c1.5 0 3-1.5 3-3V11c0-1.5-1.5-3-3-3zm0 16H6V11h20v13z"/>
      </svg>
    ),
    'projects': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M6 8H4v18c0 1.5 1.5 3 3 3h18v-3H6V8zm20-5H10c-1.5 0-3 1.5-3 3v16c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3V6c0-1.5-1.5-3-3-3zm-2 12H12v-3h12v3zm-6 5H12v-3h6v3zm6-10H12V7h12v3z"/>
      </svg>
    ),
    'tech': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M12.5 22.1L6.4 16l6.1-6.1L17 6l-8 8 8 8-4.5-4.5zm7 0L25.6 16l-6.1-6.1L15 6l8 8-8 8 4.5-4.5z"/>
      </svg>
    ),
    'blog': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M18 3H8c-1.5 0-2.5 1.5-2.5 2.5L5 26c0 1.5 1.5 2.5 3 2.5h16c1.5 0 2.5-1.5 2.5-2.5V10l-8-7zm3 21H10v-3h11v3zm0-5H10v-3h11v3zm-4-7V5l8 6h-8z"/>
      </svg>
    ),
    'contact': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M8.8 14.4c1.9 3.8 5 6.9 8.8 8.8l2.9-2.9c.4-.4 1-.5 1.4-.3 1.5.5 3.1.8 4.7.8.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3-12.5 0-22.7-10.2-22.7-22.7 0-.7.6-1.3 1.3-1.3h4.7c.7 0 1.3.6 1.3 1.3 0 1.7.3 3.3.8 4.7.1.5.1 1-.3 1.4l-2.9 2.9z"/>
      </svg>
    ),
    'resume': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M18 3H8c-1.5 0-2.5 1.5-2.5 2.5L5 26c0 1.5 1.5 2.5 3 2.5h16c1.5 0 2.5-1.5 2.5-2.5V10l-8-7zm3 21H10v-3h11v3zm0-5H10v-3h11v3zm-4-7V5l8 6h-8z"/>
      </svg>
    ),
    'linkedin': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M27.2 27.3h-4.7v-7.4c0-1.8-.04-4.1-2.5-4.1-2.5 0-2.8 1.9-2.8 3.9v7.6h-4.6V10.7h4.5v2.1h.06c.6-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.2 5.7 7.4v9.6zM7.1 9.9c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8c0 1.5-1.2 2.8-2.8 2.8zm2.4 17.4H4.7V10.7h4.8v16.6zM29.6 0H2.4C1.1 0 0 1 0 2.3v27.4C0 30.9 1.1 32 2.4 32h27.2c1.3 0 2.4-1 2.4-2.3V2.3C32 1 30.9 0 29.6 0z"/>
      </svg>
    ),
    'github': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        <path d="M16 0c-8.8 0-16 7.2-16 16 0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-3c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.4 1.7 2.4 1.7 1.4 2.4 3.7 1.7 4.6 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.4-1.8-7.4-8 0-1.8.6-3.2 1.7-4.4-.1-.4-.7-2 .2-4.2 0 0 1.4-.4 4.4 1.7 1.3-.4 2.6-.6 4-.6 1.4 0 2.7.2 4 .6 3-2.1 4.4-1.7 4.4-1.7.9 2.2.3 3.8.2 4.2 1.1 1.2 1.7 2.6 1.7 4.4 0 6.2-3.7 7.6-7.2 8 .6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8C27.4 29.1 32 23.1 32 16c0-8.8-7.2-16-16-16z"/>
      </svg>
    ),
    'games': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="white" style={{ 
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Game controller body - Windows 95 gray */}
        <rect x="6" y="12" width="20" height="8" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="7" y="13" width="18" height="6" fill="#e0e0e0"/>
        
        {/* Left grip */}
        <rect x="2" y="14" width="4" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="3" y="15" width="2" height="2" fill="#e0e0e0"/>
        
        {/* Right grip */}
        <rect x="26" y="14" width="4" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="27" y="15" width="2" height="2" fill="#e0e0e0"/>
        
        {/* D-pad - Windows 95 blue */}
        <rect x="9" y="15" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="10" y="14" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="10" y="16" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="11" y="15" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        
        {/* Action buttons - Windows 95 red */}
        <circle cx="19" cy="15" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="21" cy="16" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="19" cy="17" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="21" cy="18" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        
        {/* Start/Select buttons */}
        <rect x="13" y="15.5" width="3" height="1" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="13" y="16.5" width="3" height="1" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
      </svg>
    )
  };

  // If we have an SVG icon, use it, otherwise fall back to emoji
  if (svgIcons[icon]) {
    return <>{svgIcons[icon]}</>;
  }

  // Fallback to emoji
  return <span style={{ fontSize: size, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>{icon}</span>;
};

export default DesktopIcon;