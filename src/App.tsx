import './App.css'
// @ts-expect-error - JSX component without TypeScript definitions
import LandingPage from './components/LandingPage'
// @ts-expect-error - JSX component without TypeScript definitions
import AboutPage from './components/AboutPage'
// @ts-expect-error - JSX component without TypeScript definitions
import Experience from './components/Experience'
// @ts-expect-error - JSX component without TypeScript definitions
import Fproject from './components/Fproject'
// @ts-expect-error - JSX component without TypeScript definitions
import Sproject from './components/Sproject'
// @ts-expect-error - JSX component without TypeScript definitions
import TechStacks from './components/TechStacks'
// @ts-expect-error - JSX component without TypeScript definitions
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <AboutPage />
      <Experience />
      <Fproject />
      <Sproject />
      <TechStacks />
      <Footer />
    </div>
  )
}

export default App
