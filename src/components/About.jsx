import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Target } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { icon: GraduationCap, number: "5+", label: "Years of Research" },
    { icon: Award, number: "15+", label: "Publications" },
    { icon: Users, number: "10+", label: "Collaborations" },
    { icon: Target, number: "3", label: "Research Areas" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>About Me</h2>
            <p className="section-subtitle">
              Passionate about advancing the frontiers of artificial intelligence
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <div className="text-content">
                <p>
                  I am a dedicated computer vision researcher and AI scientist with a passion for 
                  developing innovative solutions that bridge the gap between theoretical research 
                  and practical applications. My work focuses on advancing machine learning 
                  techniques, particularly in the areas of deep learning, computer vision, and 
                  artificial intelligence.
                </p>
                
                <p>
                  During my academic journey, I have concentrated on learning with minimal manual 
                  supervision through self-supervised and semi-supervised learning approaches. 
                  My research encompasses various challenging tasks including object detection, 
                  image segmentation, and pattern recognition, with applications ranging from 
                  medical imaging to autonomous systems.
                </p>
                
                <p>
                  Currently, my focus is on developing robust AI systems that can adapt to 
                  real-world scenarios and contribute to solving complex problems across different 
                  domains. I believe in the transformative power of AI and am committed to 
                  conducting research that has both theoretical significance and practical impact.
                </p>

                <div className="highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    <li>PhD in Computer Science with focus on Computer Vision</li>
                    <li>Extensive experience in deep learning and neural networks</li>
                    <li>Published research in top-tier conferences and journals</li>
                    <li>Strong background in both theoretical and applied AI</li>
                    <li>Collaborative approach to interdisciplinary research</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-visual">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="stat-card"
                  >
                    <div className="stat-icon">
                      <stat.icon size={24} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="expertise-areas">
                <h4>Areas of Expertise</h4>
                <div className="expertise-tags">
                  <span className="tag">Computer Vision</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Neural Networks</span>
                  <span className="tag">Image Processing</span>
                  <span className="tag">Pattern Recognition</span>
                  <span className="tag">AI Research</span>
                  <span className="tag">Data Science</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About