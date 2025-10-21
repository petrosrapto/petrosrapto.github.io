import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ResearchInterests from './components/ResearchInterests'
import News from './components/News'
import Resume from './components/Resume'
import Publications from './components/Publications'
import OpenSourceProjects from './components/OpenSourceProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Petros Raptopoulos - Computer Vision Researcher & AI Scientist</title>
        <meta name="description" content="Petros Raptopoulos is a computer vision researcher and AI scientist specializing in machine learning, deep learning, and artificial intelligence. Explore research achievements, publications, and resume." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ResearchInterests />
          <News />
          <Resume />
          <Publications />
          <OpenSourceProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App