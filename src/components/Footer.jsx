import React from 'react'
import { Github, Linkedin, BookOpen, Mail, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/petrosrapto",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/petrosraptopoulos",
      label: "LinkedIn"
    },
    {
      icon: BookOpen,
      url: "https://scholar.google.com/citations?user=PLACEHOLDER",
      label: "Google Scholar"
    },
    {
      icon: Mail,
      url: "mailto:petros.raptopoulos@example.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { text: "About", href: "#about" },
    { text: "Research", href: "#research-interests" },
    { text: "Publications", href: "#publications" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <button onClick={scrollToTop} className="brand-link">
                Petros Raptopoulos
              </button>
              <p className="footer-tagline">
                AI Software Engineer and Researcher at VeltistonAI
              </p>
              <p className="footer-description">
                Advancing artificial intelligence through innovative research in 
                Natural Language Processing, Large Language Models, and Multi-Agent Systems.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="footer-contact-text">
              Let's collaborate on exciting AI research projects and 
              push the boundaries of what's possible.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Petros Raptopoulos. All rights reserved.
            </p>
          </div>
          <div className="footer-credits">
            <p>
              Made with <Heart size={16} className="heart-icon" /> using React & Modern Web Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer