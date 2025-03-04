import React from 'react'
import './App.css'
// @ts-ignore
import LandingPage from './components/LandingPage'
// @ts-ignore
import AboutPage from './components/AboutPage'
// @ts-ignore
import Experience from './components/Experience'
// @ts-ignore
import Fproject from './components/Fproject'
// @ts-ignore
import Sproject from './components/Sproject'
// @ts-ignore
import TechStacks from './components/TechStacks'
// @ts-ignore
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
