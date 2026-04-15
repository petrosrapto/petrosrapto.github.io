import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2>About</h2>
        </div>

        <div className="about-content">
          <p>
            I am a PhD Student at the <a href="https://www.ukp.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer">UKP Lab</a>, <a href="https://www.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer">TU Darmstadt</a>, under the supervision of <a href="https://www.informatik.tu-darmstadt.de/ukp/ukp_home/head_ukp/index.en.jsp" target="_blank" rel="noopener noreferrer">Prof. Iryna Gurevych</a>. My research is part of the <a href="https://www.athene-center.de/" target="_blank" rel="noopener noreferrer">HAICC</a> project (Human-AI Collaboration for Cybersecurity) within <a href="https://www.athene-center.de/" target="_blank" rel="noopener noreferrer">ATHENE</a>, exploring how reinforcement-learned LLM agents can advance CVE (vulnerability) retrieval.
          </p>
          
          <p>
            Previously, I worked as an AI Software Engineer at <a href="https://www.veltiston.ai/" target="_blank" rel="noopener noreferrer">VeltistonAI</a>, where I researched and built Multi-Agent LLM systems and RAG pipelines for real-world applications — from legal assistants for contract analysis to agentic, MCP-based healthcare chatbots.
          </p>

          <p>
            I'm the first author of PAKTON, an open-source multi-agent framework for question answering in long legal agreements, accepted for oral presentation at the <a href="https://2025.emnlp.org/" target="_blank" rel="noopener noreferrer">Main Conference of EMNLP 2025</a>. I graduated from the <a href="https://www.ece.ntua.gr/en" target="_blank" rel="noopener noreferrer">National Technical University of Athens (NTUA)</a> with a Diploma (BSc & MSc) in Electrical and Computer Engineering, majoring in Computer Science.
          </p>

          <div className="research-interests">
            <h3>Research Interests</h3>
            <ul>
              <li>Natural Language Processing</li>
              <li>Large Language Models</li>
              <li>Multi-Agent Systems</li>
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>Reinforcement Learning & Reasoning</li>
              <li>LLM Privacy, Safety & Alignment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
