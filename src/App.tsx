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

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <AboutPage />
      <Experience />
      <Fproject />
      <Sproject />
    </div>
  )
}

export default App
