import React, { useRef } from 'react';
import Snowfall from 'react-snowfall';
import './SeasonalSnowfall.css';

const SeasonalSnowfall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if we should show snowfall (from now until end of February)
  const shouldShowSnowfall = (): boolean => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11, where 0 is January, 1 is February, 11 is December
    
    // Determine the target February end date (current year or next year if we're in December)
    const targetYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    
    // Show from now through the end of February
    if (currentMonth === 11) {
      // December (month 11) - show from now until end of February next year
      const lastDayOfFeb = new Date(targetYear, 2, 0).getDate(); // Day 0 of March = last day of February
      const febEnd = new Date(targetYear, 1, lastDayOfFeb, 23, 59, 59); // Last day of February, 11:59:59 PM
      return now <= febEnd;
    } else if (currentMonth === 0) {
      // January (month 0) - show until end of February
      const lastDayOfFeb = new Date(targetYear, 2, 0).getDate();
      const febEnd = new Date(targetYear, 1, lastDayOfFeb, 23, 59, 59);
      return now <= febEnd;
    } else if (currentMonth === 1) {
      // February (month 1) - show until end of February (28th or 29th for leap years)
      const lastDayOfFeb = new Date(targetYear, 2, 0).getDate();
      const febEnd = new Date(targetYear, 1, lastDayOfFeb, 23, 59, 59);
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

