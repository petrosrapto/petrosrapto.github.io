import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Mail, Linkedin, BookOpen } from 'lucide-react'
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

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero">
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
          <motion.div variants={itemVariants} className="hero-image">
            <img 
              src="/api/placeholder/300/300" 
              alt="Petros Raptopoulos"
              className="profile-image"
            />
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Petros Raptopoulos
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Computer Vision Researcher & AI Scientist
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            Welcome! 👋 I am a passionate researcher in computer vision and artificial intelligence, 
            dedicated to advancing the frontiers of machine learning and developing innovative solutions 
            that bridge the gap between theoretical research and practical applications.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
              <Mail size={18} />
            </a>
            <a href="#publications" className="btn btn-outline">
              View Publications
              <BookOpen size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            <a 
              href="https://github.com/petrosrapto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/petrosraptopoulos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://scholar.google.com/citations?user=PLACEHOLDER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Google Scholar"
            >
              <BookOpen size={24} />
            </a>
            <a 
              href="mailto:petros.raptopoulos@example.com" 
              className="social-link"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.button 
            variants={itemVariants}
            onClick={scrollToAbout}
            className="scroll-indicator"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero