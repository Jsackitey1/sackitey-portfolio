import React from 'react';

interface DesktopIconProps {
  icon: string;
  size?: number;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, size = 32 }) => {
  // Define SVG icons for better clarity with white color for desktop visibility
  const svgIcons: { [key: string]: React.ReactNode } = {
    'about': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    'experience': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
        <path d="M20 6h-2l-2-2H8L6 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
      </svg>
    ),
    'projects': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    ),
    'tech': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    'blog': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    'contact': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
