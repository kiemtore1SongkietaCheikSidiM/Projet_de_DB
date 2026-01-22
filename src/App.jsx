import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <div className='bg-gray-800'>
        <Header />
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
    </>
  )
}

export default App
