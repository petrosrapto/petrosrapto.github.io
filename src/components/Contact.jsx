import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, BookOpen } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "petros.raptopoulos@example.com",
      link: "mailto:petros.raptopoulos@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA, USA",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/petrosrapto",
      color: "#24292e"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/petrosraptopoulos",
      color: "#0077b5"
    },
    {
      icon: BookOpen,
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=PLACEHOLDER",
      color: "#4285f4"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:petros.raptopoulos@example.com",
      color: "#ea4335"
    }
  ]

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">
              I'm always interested in discussing research opportunities, collaborations, 
              and innovative projects in computer vision and AI
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                Whether you're interested in research collaboration, have questions about 
                my work, or want to discuss potential opportunities, I'd love to hear from you.
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      <info.icon size={20} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      <a 
                        href={info.link} 
                        className="contact-value"
                        {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="social-section">
                <h4>Follow My Work</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact