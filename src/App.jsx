import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResearchInterests from './components/ResearchInterests'
import News from './components/News'
import Resume from './components/Resume'
import Publications from './components/Publications'
import OpenSourceProjects from './components/OpenSourceProjects'
import WorkProjects from './components/WorkProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Petros Raptopoulos - PhD Student & NLP Researcher at TU Darmstadt</title>
        <meta name="description" content="Petros Raptopoulos is a PhD Student at the UKP Lab, TU Darmstadt, under Prof. Iryna Gurevych. Researching reinforcement-learned LLM agents for CVE retrieval (HAICC/ATHENE). First author of PAKTON (EMNLP 2025, oral)." />
      </Helmet>
      
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <ResearchInterests />
          <News />
          <Resume />
          <Publications />
          <OpenSourceProjects />
          <WorkProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App