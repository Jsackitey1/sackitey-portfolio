import { Suspense, lazy, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import SEO from './components/SEO'
import Desktop from './components/Desktop'
import { analytics } from './utils/analytics'

// Lazy load components for better performance
const LandingPage = lazy(() => import('./components/LandingPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const Experience = lazy(() => import('./components/Experience'))
const EnhancedProjects = lazy(() => import('./components/EnhancedProjects'))
const TechStacks = lazy(() => import('./components/TechStacks'))
const Blog = lazy(() => import('./components/Blog'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const Footer = lazy(() => import('./components/Footer'))

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
            <Desktop>
              {/* Fallback content for non-desktop browsers or as backup */}
              <Suspense fallback={<Loading size="large" text="Loading portfolio..." />}>
                <section id="home">
                  <LandingPage />
                </section>
              </Suspense>

              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <Experience />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <EnhancedProjects />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <TechStacks />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <Blog />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <Testimonials />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <ContactForm />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <Footer />
              </Suspense>
            </Desktop>
          </div>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
