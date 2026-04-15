import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Mail, Linkedin, GraduationCap } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const scrollToResearch = () => {
    const element = document.getElementById('research-interests')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-header">
            <div className="hero-image" itemScope itemType="https://schema.org/Person">
              <img 
                src="/profile.jpg" 
                alt="Petros Raptopoulos - NLP Researcher & PhD Student at TU Darmstadt"
                className="profile-image"
                itemProp="image"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.parentNode.innerHTML = '<div class="profile-placeholder"><span>PR</span></div>';
                }}
              />
            </div>
            <div className="hero-title-wrapper" itemScope itemType="https://schema.org/Person">
              <h1 className="hero-title">
                <span itemProp="name">Petros Raptopoulos</span>
                <meta itemProp="alternateName" content="Πέτρος Ραπτόπουλος" />
              </h1>
              <p className="hero-subtitle">
                <span itemProp="jobTitle">PhD Student</span> at <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><a href="https://www.ukp.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer" className="inline-link"><span itemProp="name">UKP Lab, TU Darmstadt</span></a></span>
              </p>
              <div className="hero-social-inline">
                <a 
                  href="https://www.linkedin.com/in/petrosrapto/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=G7paGngAAAAJ&hl=en&oi=ao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Google Scholar"
                >
                  <GraduationCap size={22} />
                </a>
                <a 
                  href="https://github.com/petrosrapto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="mailto:petrosrapto@gmail.com" 
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Hello 👋 I am a PhD Student at the <a href="https://www.ukp.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer" className="inline-link">UKP Lab</a>, <a href="https://www.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer" className="inline-link">TU Darmstadt</a>, under the supervision of <a href="https://www.informatik.tu-darmstadt.de/ukp/ukp_home/head_ukp/index.en.jsp" target="_blank" rel="noopener noreferrer" className="inline-link">Prof. Iryna Gurevych</a>. My research is part of the <a href="https://www.athene-center.de/" target="_blank" rel="noopener noreferrer" className="inline-link">HAICC</a> project (Human-AI Collaboration for Cybersecurity) within <a href="https://www.athene-center.de/" target="_blank" rel="noopener noreferrer" className="inline-link">ATHENE</a>, exploring how reinforcement-learned LLM agents can advance CVE (vulnerability) retrieval.
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            Previously, I worked as an AI Software Engineer at <a href="https://www.veltiston.ai/" target="_blank" rel="noopener noreferrer" className="inline-link">VeltistonAI</a>, researching and building Multi-Agent LLM systems and RAG pipelines for real-world applications. I'm also the first author of PAKTON, accepted for oral presentation at the <a href="https://2025.emnlp.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Main Conference of EMNLP 2025</a>. I graduated from the <a href="https://www.ece.ntua.gr/en" target="_blank" rel="noopener noreferrer" className="inline-link">National Technical University of Athens (NTUA)</a> with a Diploma (BSc & MSc) in Electrical and Computer Engineering, majoring in Computer Science.
          </motion.p>

          <motion.button 
            variants={itemVariants}
            onClick={scrollToResearch}
            className="scroll-indicator"
            aria-label="Scroll to research interests section"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero