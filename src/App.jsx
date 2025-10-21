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
        <title>Petros Raptopoulos - AI Software Engineer & NLP Researcher</title>
        <meta name="description" content="Petros Raptopoulos is an AI Software Engineer and Researcher at VeltistonAI, specializing in Natural Language Processing, Large Language Models, Multi-Agent Systems, and RAG pipelines. NTUA graduate seeking PhD opportunities in NLP." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="App">
        <Navbar />
        <div className="construction-banner">
          <p>⚠️ Website under construction, not finalized</p>
        </div>
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