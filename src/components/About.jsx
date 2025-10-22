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
            I recently graduated from the <a href="https://www.ece.ntua.gr/en" target="_blank" rel="noopener noreferrer">National Technical University of Athens (NTUA)</a> with a Diploma (BSc & MSc) in Electrical and Computer Engineering, majoring in Computer Science. My research and professional interests focus on Artificial Intelligence, particularly Natural Language Processing (NLP).
          </p>
          
          <p>
            I currently work at <a href="https://www.veltiston.ai/" target="_blank" rel="noopener noreferrer">VeltistonAI</a>, where I research and develop AI tools designed for real-world applications. My work focuses on designing and building intelligent systems that combine multi-agent architectures with advanced retrieval and reasoning techniques.
          </p>
          
          <p>
            I'm the first author of PAKTON, an open-source multi-agent framework for question answering in long legal agreements, which has been accepted for oral presentation at the <a href="https://2025.emnlp.org/" target="_blank" rel="noopener noreferrer">Main Conference of EMNLP 2025</a>. This work represents my commitment to bridging theoretical research with practical applications in the legal domain.
          </p>
          
          <p>
            I am interested in PhD positions in the NLP domain and am always open to discussing research opportunities that involve Natural Language Processing, Large Language Models, Multi-Agent Systems, and innovative applications of AI in complex reasoning tasks.
          </p>

          <div className="research-interests">
            <h3>Research Interests</h3>
            <ul>
              <li>Natural Language Processing</li>
              <li>Large Language Models</li>
              <li>Multi-Agent Systems</li>
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>Question Answering</li>
              <li>Legal AI & Document Understanding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
