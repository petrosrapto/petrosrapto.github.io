import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Target } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { icon: GraduationCap, number: "NTUA", label: "Graduate (BSc & MSc)" },
    { icon: Award, number: "EMNLP", label: "2025 Oral Presentation" },
    { icon: Users, number: "VeltistonAI", label: "AI Engineer & Researcher" },
    { icon: Target, number: "NLP", label: "Research Focus" }
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
              AI Software Engineer and Researcher specializing in Natural Language Processing and Multi-Agent Systems
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <div className="text-content">
                <p>
                  I currently work at VeltistonAI, where I design and build intelligent systems that 
                  combine multi-agent architectures with advanced retrieval and reasoning techniques. 
                  My work focuses on developing AI systems that can understand, process, and reason 
                  over complex information to provide intelligent solutions for real-world problems.
                </p>
                
                <p>
                  I'm also the first author of PAKTON, an open-source multi-agent framework for 
                  question answering in long legal agreements, which has been accepted for oral 
                  presentation at the Main Conference of EMNLP 2025. This work represents my commitment 
                  to bridging theoretical research with practical applications in the legal domain.
                </p>
                
                <p>
                  I am interested in PhD positions in the NLP domain and am always open to discussing 
                  research opportunities that involve Natural Language Processing, Large Language Models, 
                  Multi-Agent Systems, and innovative applications of AI in complex reasoning tasks. 
                  In this space, you can learn more about my research, explore my publications, and 
                  follow my work on AI systems for reasoning and decision-making.
                </p>

                <div className="highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    <li>Diploma (BSc & MSc) in Electrical and Computer Engineering from NTUA</li>
                    <li>Specialization in Computer Science with focus on AI and NLP</li>
                    <li>AI Software Engineer and Researcher at VeltistonAI</li>
                    <li>First author of PAKTON framework (EMNLP 2025)</li>
                    <li>Experience in Multi-Agent Systems and RAG pipelines</li>
                    <li>Open to PhD opportunities in NLP domain</li>
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
                  <span className="tag">Natural Language Processing</span>
                  <span className="tag">Large Language Models</span>
                  <span className="tag">Multi-Agent Systems</span>
                  <span className="tag">Retrieval-Augmented Generation</span>
                  <span className="tag">Question Answering</span>
                  <span className="tag">Legal AI</span>
                  <span className="tag">AI Software Engineering</span>
                  <span className="tag">Machine Learning</span>
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