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
                alt="Petros Raptopoulos - AI Software Engineer & NLP Researcher"
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
                <span itemProp="jobTitle">AI Software Engineer and Researcher</span> at <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><span itemProp="name">VeltistonAI</span></span>
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
            Hello 👋 I recently graduated from the <a href="https://www.ece.ntua.gr/en" target="_blank" rel="noopener noreferrer" className="inline-link">National Technical University of Athens (NTUA)</a> with a Diploma (BSc & MSc) in Electrical and Computer Engineering, majoring in Computer Science. My research and professional interests focus on Artificial Intelligence, particularly Natural Language Processing (NLP).
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            I currently work at <a href="https://www.veltiston.ai/" target="_blank" rel="noopener noreferrer" className="inline-link">VeltistonAI</a>, where I research and develop AI tools designed for real-world applications. I'm also the first author of PAKTON, accepted for oral presentation at the <a href="https://2025.emnlp.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Main Conference of EMNLP 2025</a>.
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            I am interested in PhD positions in the NLP domain, feel free to contact me for any related opportunities.
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            In this space, you can learn more about my background, research and publications.
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