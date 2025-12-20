import React, { useRef } from 'react';
import Snowfall from 'react-snowfall';
import './SeasonalSnowfall.css';

const SeasonalSnowfall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if we should show snowfall (every year from December through end of February)
  const shouldShowSnowfall = (): boolean => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11, where 0 is January, 1 is February, 11 is December
    
    // Show every year from December through the end of February
    if (currentMonth === 11) {
      // December (month 11) - always show in December
      return true;
    } else if (currentMonth === 0) {
      // January (month 0) - always show in January
      return true;
    } else if (currentMonth === 1) {
      // February (month 1) - show until end of February (28th or 29th for leap years)
      // Get the last day of February (handles leap years automatically)
      const lastDayOfFeb = new Date(currentYear, 2, 0).getDate(); // Day 0 of March = last day of February
      const febEnd = new Date(currentYear, 1, lastDayOfFeb, 23, 59, 59); // Last day of February, 11:59:59 PM
      return now <= febEnd;
    }
    
    // Not in December, January, or February, don't show
    return false;
  };

  if (!shouldShowSnowfall()) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="seasonal-snowfall-container"
    >
      <Snowfall
        color="#ffffff"
        snowflakeCount={200}
        radius={[0.5, 3.0]}
        speed={[0.5, 3.0]}
        wind={[-0.5, 0.5]}
      />
    </div>
  );
};

export default SeasonalSnowfall;

