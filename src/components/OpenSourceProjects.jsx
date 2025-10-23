import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Eye, Bookmark } from 'lucide-react'
import './OpenSourceProjects.css'

const OpenSourceProjects = () => {
  const projects = [
    {
      name: "PAKTON",
      description: "A Multi-Agent Framework for Question Answering in Long Legal Agreements. Open-source, end-to-end solution using collaborative LLM agents and RAG for automated contract review. Accepted for oral presentation at EMNLP 2025.",
      tech: ["NLP", "LLMs", "Multi-Agents Systems", "RAG", "LegalAI", "contracts", "legal agreements"],
      stats: { stars: 24, forks: 2, watchers: 0 },
      links: {
        github: "https://github.com/petrosrapto/PAKTON",
        demo: "https://pakton.site",
        docs: "https://pakton.site/evaluation"
      }
    },
    {
      name: "BlockChat",
      description: "A distributed blockchain system for secure messaging and cryptocurrency transactions. Implements Proof-of-Stake consensus, cryptographic transaction validation, and peer-to-peer communication without central authority.",
      tech: ["Distributed Systems", "Blockchain", "Proof Of Stake", "Cryptography", "Private Messages"],
      stats: { stars: 2, forks: 1, watchers: 0 },
      links: {
        github: "https://github.com/petrosrapto/DistributedSystems_23-24"
      }
    }
  ]

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Open Source Projects</h2>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`project-card ${project.featured ? 'featured' : ''}`}
              >

                <div className="project-header">
                  <div className="project-name-wrapper">
                    <Bookmark size={18} color="var(--text-secondary)" />
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <h3 className="project-name">{project.name}</h3>
                    </a>
                  </div>
                  <div className="project-stats">
                    <div className="stat">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="stat">
                      <GitFork size={14} />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="stat">
                      <Eye size={14} />
                      <span>{project.stats.watchers}</span>
                    </div>
                  </div>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.links.docs && (
                    <a 
                      href={project.links.docs} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link docs"
                    >
                      <ExternalLink size={16} />
                      Docs
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenSourceProjects