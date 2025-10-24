import React from 'react'
import { motion } from 'framer-motion'
import { MessagesSquare, Brain, GitCompareArrows, Shield, Database, Puzzle } from 'lucide-react'
import './ResearchInterests.css'

const ResearchInterests = () => {
  const researchAreas = [
    {
      icon: MessagesSquare,
      title: "Natural Language Processing",
      description: "Enabling machines to understand, interpret, and generate human language, bridging the gap between human communication and machine reasoning."
    },
    {
      icon: Brain,
      title: "Large Language Models",
      description: "Harnessing the power of large language models to capture complex patterns of language and reasoning, enabling adaptive, intelligent, and context-aware AI systems."
    },
    {
      icon: GitCompareArrows,
      title: "Multi-Agent Systems",
      description: "Designing collaborative AI systems where multiple agents coordinate to solve complex tasks. Focus on agent communication, task decomposition, and emergent collective intelligence."
    },
    {
      icon: Shield,
      title: "LLM Privacy,\nSafety and\nAlignment",
      description: "Ensuring large language models behave safely and align with human values. Research on reducing harmful outputs, bias mitigation, interpretability, and secure AI."
    },
    {
      icon: Database,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Enhancing language models with external knowledge through efficient retrieval mechanisms, enabling grounded, verifiable, and up-to-date reasoning."
    },
    {
      icon: Puzzle,
      title: "Reinforcement Learning (RL) and Reasoning",
      description: "Studying how reinforcement learning can develop reasoning skills to enable agents that learn from experience, adapt their behavior, and make rational, goal-driven decisions."
    }
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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="research-interests" className="section research-interests">
      <div className="container">
        <motion.div 
          className="research-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Research Interests</h2>
          </motion.div>

          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="research-card"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    <area.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="card-title">{area.title}</h3>
                </div>
                <p className="card-description">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="research-statement">
            <div className="statement-content">
              <h3>Research Philosophy</h3>
              <p>
                My research is driven by the belief that AI should be safe, practical, and grounded in real-world needs. <br></br>
                I focus on developing Retrieval-Augmented Generation (RAG) pipelines and Multi-Agent systems that make Large Language Models more traceable and justifiable in everyday applications. Inspired by the idea that true knowledge lies not in memorization but in knowing where to find information when needed, I design systems that retrieve and use knowledge efficiently without additional costly training. 
                Through this work, I aim to create AI technologies that organizations and communities can trust, pushing the boundaries of the state of the art while ensuring their safe and responsible use in real-world settings.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchInterests