import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'
import Desktop from './components/Desktop'
import SeasonalSnowfall from './components/SeasonalSnowfall'
import { analytics } from './utils/analytics'

// Components are now loaded dynamically within the Desktop component

function App() {
  useEffect(() => {
    // Initialize analytics (replace with your actual GA tracking ID)
    analytics.init('GA_TRACKING_ID');
    
    // Track initial page load
    analytics.trackPageView(window.location.pathname);

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = (Date.now() - startTime) / 1000;
      analytics.trackTimeOnPage(timeSpent);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload();
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <div className="app-container">
            <SEO />
            <Desktop />
          </div>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
