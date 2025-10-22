import React from 'react'
import { Mail, MapPin, Github, Linkedin, GraduationCap, Phone } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <div className="contact-content">
          <p>
            I'm always interested in discussing research opportunities, collaborations, or PhD positions in NLP.
            Feel free to reach out via email or connect with me on social media.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:petrosrapto@gmail.com">petrosrapto@gmail.com</a>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+306948206090">+30 6948206090</a>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Athens, Greece</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/petrosrapto/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?user=G7paGngAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="social-link">
              <GraduationCap size={20} />
              <span>Google Scholar</span>
            </a>
            <a href="https://github.com/petrosrapto" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
