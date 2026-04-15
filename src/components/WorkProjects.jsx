import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Bookmark, ExternalLink } from 'lucide-react'
import './WorkProjects.css'

const WorkProjects = () => {
  const projects = [
    {
      name: "AskH2O",
      description: "An LLM-based multi-agent chatbot for healthcare professionals, supporting natural language querying of hospital databases, clinical prediction retrieval, and automated visualization generation. Features multi-agent orchestration with tree-structured tool selection for optimal routing, SQL query construction with direct database access, SHAP-based explainability for clinical predictions, and a Model Context Protocol (MCP) microservices architecture with embeddable side-panel integration.",
      tech: ["Multi-Agent Orchestration", "Healthcare AI", "MCP Protocol", "LangGraph", "Text-to-SQL", "Explainable AI", "RAG"],
      link: "https://www.hhopt.com/resources-and-media/h2os-next-generation-ai-agent-for-smarter-safer-care"
    },
    {
      name: "eVnomia (AILA)",
      description: "An AI-powered legal document analysis platform embedded as a Microsoft Word add-in, enabling contract review, clause-level risk identification, and collaborative AI-assisted editing within the lawyer's native workflow. Features bidirectional tool-calling with Office.js, a multi-stage ML pipeline for cross-document section matching (semantic embeddings, structural scoring, Hungarian algorithm optimization), word-level diffing, transformer-based NER for PII anonymization, and a hybrid RAG pipeline over legal knowledge bases.",
      tech: ["Legal AI", "RAG", "Semantic Search", "NER", "Anonymization", "Document Matching", "Office.js"],
      link: "https://www.veltiston.ai/"
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
    <section id="work-projects" className="section work-projects">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>
              Industry Projects
              <span className="work-icon-wrapper">
                <Briefcase size={20} />
              </span>
              <span className="section-subtitle">Projects I contributed to at VeltistonAI</span>
            </h2>
          </motion.div>

          <div className="work-projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="work-project-card"
              >
                <div className="work-project-header">
                  <div className="project-name-wrapper">
                    <Bookmark size={18} color="var(--text-secondary)" />
                    <h3 className="project-name">{project.name}</h3>
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

                {project.link && (
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      Learn More
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkProjects
