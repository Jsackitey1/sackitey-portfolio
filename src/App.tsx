import React from 'react'
import './App.css'
// @ts-ignore
import LandingPage from './components/LandingPage'
// @ts-ignore
import AboutPage from './components/AboutPage'

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <AboutPage />
    </div>
  )
}

export default App
