import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
        {/* Using system fonts - Georgia is widely available */}
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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App