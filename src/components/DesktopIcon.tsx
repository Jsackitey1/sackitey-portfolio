import React from 'react';

interface DesktopIconProps {
  icon: string;
  size?: number;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, size = 32 }) => {
  // Define authentic Windows 95-style SVG icons with proper colors and 3D effects
  const svgIcons: { [key: string]: React.ReactNode } = {
    'about': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 folder icon with authentic colors */}
        <rect x="4" y="8" width="24" height="20" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="4" y="8" width="16" height="2" fill="#e0e0e0"/>
        <rect x="5" y="9" width="14" height="1" fill="#ffffff"/>
        <rect x="6" y="10" width="12" height="1" fill="#c0c0c0"/>
        <rect x="4" y="10" width="2" height="18" fill="#808080"/>
        <rect x="26" y="10" width="2" height="18" fill="#ffffff"/>
        <rect x="4" y="28" width="24" height="2" fill="#808080"/>
        {/* Folder tab */}
        <rect x="4" y="6" width="12" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="5" y="7" width="10" height="1" fill="#ffffff"/>
        <rect x="5" y="8" width="10" height="1" fill="#e0e0e0"/>
      </svg>
    ),
    'experience': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 briefcase icon with authentic colors */}
        <rect x="6" y="10" width="20" height="16" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="6" y="10" width="20" height="4" fill="#e0e0e0"/>
        <rect x="7" y="11" width="18" height="1" fill="#ffffff"/>
        <rect x="7" y="12" width="18" height="1" fill="#ffffff"/>
        <rect x="7" y="13" width="18" height="1" fill="#e0e0e0"/>
        <rect x="6" y="14" width="2" height="12" fill="#808080"/>
        <rect x="24" y="14" width="2" height="12" fill="#ffffff"/>
        <rect x="6" y="26" width="20" height="2" fill="#808080"/>
        {/* Briefcase handle */}
        <rect x="14" y="8" width="4" height="2" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="14" y="8" width="4" height="1" fill="#e0e0e0"/>
      </svg>
    ),
    'projects': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 folder with documents icon */}
        <rect x="4" y="8" width="24" height="20" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="4" y="8" width="16" height="2" fill="#e0e0e0"/>
        <rect x="5" y="9" width="14" height="1" fill="#ffffff"/>
        <rect x="6" y="10" width="12" height="1" fill="#c0c0c0"/>
        <rect x="4" y="10" width="2" height="18" fill="#808080"/>
        <rect x="26" y="10" width="2" height="18" fill="#ffffff"/>
        <rect x="4" y="28" width="24" height="2" fill="#808080"/>
        {/* Folder tab */}
        <rect x="4" y="6" width="12" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="5" y="7" width="10" height="1" fill="#ffffff"/>
        <rect x="5" y="8" width="10" height="1" fill="#e0e0e0"/>
        {/* Document inside folder */}
        <rect x="8" y="14" width="12" height="8" fill="#ffffff" stroke="#808080" strokeWidth="1"/>
        <rect x="9" y="15" width="10" height="1" fill="#000000"/>
        <rect x="9" y="17" width="8" height="1" fill="#000000"/>
        <rect x="9" y="19" width="6" height="1" fill="#000000"/>
      </svg>
    ),
    'tech': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 computer/monitor icon */}
        <rect x="6" y="6" width="20" height="14" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="6" y="6" width="20" height="2" fill="#e0e0e0"/>
        <rect x="7" y="7" width="18" height="1" fill="#ffffff"/>
        <rect x="6" y="8" width="2" height="12" fill="#808080"/>
        <rect x="24" y="8" width="2" height="12" fill="#ffffff"/>
        <rect x="6" y="20" width="20" height="2" fill="#808080"/>
        {/* Monitor screen */}
        <rect x="8" y="8" width="16" height="10" fill="#000000"/>
        <rect x="9" y="9" width="14" height="8" fill="#008080"/>
        {/* Monitor stand */}
        <rect x="12" y="22" width="8" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="12" y="22" width="8" height="1" fill="#e0e0e0"/>
        <rect x="13" y="23" width="6" height="1" fill="#ffffff"/>
        <rect x="12" y="24" width="2" height="2" fill="#808080"/>
        <rect x="18" y="24" width="2" height="2" fill="#ffffff"/>
        <rect x="12" y="26" width="8" height="2" fill="#808080"/>
      </svg>
    ),
    'blog': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 document icon with text lines */}
        <rect x="6" y="4" width="20" height="24" fill="#ffffff" stroke="#808080" strokeWidth="1"/>
        <rect x="6" y="4" width="20" height="2" fill="#e0e0e0"/>
        <rect x="7" y="5" width="18" height="1" fill="#ffffff"/>
        <rect x="6" y="6" width="2" height="22" fill="#808080"/>
        <rect x="24" y="6" width="2" height="22" fill="#ffffff"/>
        <rect x="6" y="28" width="20" height="2" fill="#808080"/>
        {/* Document text lines */}
        <rect x="8" y="8" width="14" height="1" fill="#000000"/>
        <rect x="8" y="10" width="12" height="1" fill="#000000"/>
        <rect x="8" y="12" width="10" height="1" fill="#000000"/>
        <rect x="8" y="14" width="14" height="1" fill="#000000"/>
        <rect x="8" y="16" width="11" height="1" fill="#000000"/>
        <rect x="8" y="18" width="9" height="1" fill="#000000"/>
        <rect x="8" y="20" width="13" height="1" fill="#000000"/>
        <rect x="8" y="22" width="8" height="1" fill="#000000"/>
        <rect x="8" y="24" width="12" height="1" fill="#000000"/>
      </svg>
    ),
    'contact': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 envelope icon */}
        <rect x="6" y="8" width="20" height="16" fill="#ffffff" stroke="#808080" strokeWidth="1"/>
        <rect x="6" y="8" width="20" height="2" fill="#e0e0e0"/>
        <rect x="7" y="9" width="18" height="1" fill="#ffffff"/>
        <rect x="6" y="10" width="2" height="14" fill="#808080"/>
        <rect x="24" y="10" width="2" height="14" fill="#ffffff"/>
        <rect x="6" y="24" width="20" height="2" fill="#808080"/>
        {/* Envelope flap */}
        <polygon points="6,8 16,16 26,8" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <polygon points="7,9 16,15 25,9" fill="#e0e0e0"/>
        {/* Letter inside */}
        <rect x="10" y="14" width="12" height="8" fill="#ffffff" stroke="#808080" strokeWidth="1"/>
        <rect x="11" y="15" width="10" height="1" fill="#000000"/>
        <rect x="11" y="17" width="8" height="1" fill="#000000"/>
        <rect x="11" y="19" width="6" height="1" fill="#000000"/>
      </svg>
    ),
    'resume': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 document with corner fold */}
        <rect x="6" y="4" width="20" height="24" fill="#ffffff" stroke="#808080" strokeWidth="1"/>
        <rect x="6" y="4" width="20" height="2" fill="#e0e0e0"/>
        <rect x="7" y="5" width="18" height="1" fill="#ffffff"/>
        <rect x="6" y="6" width="2" height="22" fill="#808080"/>
        <rect x="24" y="6" width="2" height="22" fill="#ffffff"/>
        <rect x="6" y="28" width="20" height="2" fill="#808080"/>
        {/* Corner fold */}
        <polygon points="18,4 26,4 26,12 18,4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <polygon points="19,5 25,5 25,11 19,5" fill="#e0e0e0"/>
        <rect x="19" y="6" width="6" height="1" fill="#ffffff"/>
        <rect x="19" y="7" width="5" height="1" fill="#ffffff"/>
        <rect x="19" y="8" width="4" height="1" fill="#ffffff"/>
        {/* Document content lines */}
        <rect x="8" y="10" width="12" height="1" fill="#000000"/>
        <rect x="8" y="12" width="10" height="1" fill="#000000"/>
        <rect x="8" y="14" width="8" height="1" fill="#000000"/>
        <rect x="8" y="16" width="12" height="1" fill="#000000"/>
        <rect x="8" y="18" width="9" height="1" fill="#000000"/>
        <rect x="8" y="20" width="7" height="1" fill="#000000"/>
        <rect x="8" y="22" width="11" height="1" fill="#000000"/>
        <rect x="8" y="24" width="6" height="1" fill="#000000"/>
      </svg>
    ),
    'linkedin': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 network/globe icon */}
        <circle cx="16" cy="16" r="14" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <circle cx="16" cy="16" r="12" fill="#e0e0e0"/>
        <circle cx="16" cy="16" r="10" fill="#ffffff"/>
        {/* Network lines */}
        <line x1="6" y1="16" x2="26" y2="16" stroke="#000000" strokeWidth="1"/>
        <line x1="16" y1="6" x2="16" y2="26" stroke="#000000" strokeWidth="1"/>
        <line x1="10" y1="10" x2="22" y2="22" stroke="#000000" strokeWidth="1"/>
        <line x1="22" y1="10" x2="10" y2="22" stroke="#000000" strokeWidth="1"/>
        {/* Network nodes */}
        <circle cx="16" cy="16" r="2" fill="#316ac5"/>
        <circle cx="10" cy="10" r="1" fill="#316ac5"/>
        <circle cx="22" cy="10" r="1" fill="#316ac5"/>
        <circle cx="10" cy="22" r="1" fill="#316ac5"/>
        <circle cx="22" cy="22" r="1" fill="#316ac5"/>
      </svg>
    ),
    'github': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Windows 95 computer terminal icon */}
        <rect x="4" y="6" width="24" height="18" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="4" y="6" width="24" height="2" fill="#e0e0e0"/>
        <rect x="5" y="7" width="22" height="1" fill="#ffffff"/>
        <rect x="4" y="8" width="2" height="16" fill="#808080"/>
        <rect x="26" y="8" width="2" height="16" fill="#ffffff"/>
        <rect x="4" y="24" width="24" height="2" fill="#808080"/>
        {/* Terminal screen */}
        <rect x="6" y="10" width="20" height="12" fill="#000000"/>
        <rect x="7" y="11" width="18" height="10" fill="#008080"/>
        {/* Terminal text lines */}
        <rect x="8" y="12" width="6" height="1" fill="#00ff00"/>
        <rect x="8" y="14" width="8" height="1" fill="#00ff00"/>
        <rect x="8" y="16" width="4" height="1" fill="#00ff00"/>
        <rect x="8" y="18" width="7" height="1" fill="#00ff00"/>
        {/* Terminal cursor */}
        <rect x="15" y="18" width="1" height="1" fill="#00ff00"/>
      </svg>
    ),
    'games': (
      <svg width={size} height={size} viewBox="0 0 32 32" style={{ 
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges'
      }}>
        {/* Enhanced Windows 95 game controller with better 3D effects */}
        <rect x="6" y="12" width="20" height="8" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="6" y="12" width="20" height="2" fill="#e0e0e0"/>
        <rect x="7" y="13" width="18" height="6" fill="#e0e0e0"/>
        <rect x="6" y="14" width="2" height="6" fill="#808080"/>
        <rect x="24" y="14" width="2" height="6" fill="#ffffff"/>
        <rect x="6" y="20" width="20" height="2" fill="#808080"/>
        
        {/* Left grip with 3D effect */}
        <rect x="2" y="14" width="4" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="2" y="14" width="4" height="1" fill="#e0e0e0"/>
        <rect x="3" y="15" width="2" height="2" fill="#e0e0e0"/>
        <rect x="2" y="16" width="1" height="2" fill="#808080"/>
        <rect x="5" y="16" width="1" height="2" fill="#ffffff"/>
        <rect x="2" y="18" width="4" height="1" fill="#808080"/>
        
        {/* Right grip with 3D effect */}
        <rect x="26" y="14" width="4" height="4" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="26" y="14" width="4" height="1" fill="#e0e0e0"/>
        <rect x="27" y="15" width="2" height="2" fill="#e0e0e0"/>
        <rect x="26" y="16" width="1" height="2" fill="#808080"/>
        <rect x="29" y="16" width="1" height="2" fill="#ffffff"/>
        <rect x="26" y="18" width="4" height="1" fill="#808080"/>
        
        {/* D-pad - Windows 95 blue with 3D effect */}
        <rect x="9" y="15" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="9" y="15" width="2" height="1" fill="#4a8ef7"/>
        <rect x="10" y="14" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="10" y="14" width="2" height="1" fill="#4a8ef7"/>
        <rect x="10" y="16" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="10" y="16" width="2" height="1" fill="#4a8ef7"/>
        <rect x="11" y="15" width="2" height="2" fill="#316ac5" stroke="#000080" strokeWidth="1"/>
        <rect x="11" y="15" width="2" height="1" fill="#4a8ef7"/>
        
        {/* Action buttons - Windows 95 red with 3D effect */}
        <circle cx="19" cy="15" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="19" cy="14.5" r="1" fill="#ff4040"/>
        <circle cx="21" cy="16" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="21" cy="15.5" r="1" fill="#ff4040"/>
        <circle cx="19" cy="17" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="19" cy="16.5" r="1" fill="#ff4040"/>
        <circle cx="21" cy="18" r="1.5" fill="#ff0000" stroke="#800000" strokeWidth="1"/>
        <circle cx="21" cy="17.5" r="1" fill="#ff4040"/>
        
        {/* Start/Select buttons with 3D effect */}
        <rect x="13" y="15.5" width="3" height="1" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="13" y="15.5" width="3" height="0.5" fill="#e0e0e0"/>
        <rect x="13" y="16.5" width="3" height="1" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
        <rect x="13" y="16.5" width="3" height="0.5" fill="#e0e0e0"/>
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