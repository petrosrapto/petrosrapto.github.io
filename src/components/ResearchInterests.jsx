import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Brain, Users, Shield, Database, Lightbulb } from 'lucide-react'
import './ResearchInterests.css'

const ResearchInterests = () => {
  const researchAreas = [
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advancing natural language understanding and generation through state-of-the-art models. Focus on text analysis, sentiment understanding, machine translation, and information extraction from unstructured text."
    },
    {
      icon: Brain,
      title: "Large Language Models",
      description: "Developing and fine-tuning large-scale language models for diverse applications. Specializing in prompt engineering, model optimization, instruction tuning, and domain-specific adaptations."
    },
    {
      icon: Users,
      title: "Multi-Agent Systems",
      description: "Designing collaborative AI systems where multiple agents coordinate to solve complex tasks. Focus on agent communication, task decomposition, and emergent collective intelligence."
    },
    {
      icon: Shield,
      title: "LLM Safety and Alignment",
      description: "Ensuring large language models behave safely and align with human values. Research on reducing harmful outputs, bias mitigation, interpretability, and responsible AI deployment."
    },
    {
      icon: Database,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Enhancing language models with external knowledge through efficient retrieval mechanisms. Building systems that combine parametric and non-parametric knowledge for accurate, up-to-date responses."
    },
    {
      icon: Lightbulb,
      title: "Reinforcement Learning (RL) and Reasoning",
      description: "Developing agents that learn optimal decision-making through interaction and feedback. Focus on reasoning capabilities, chain-of-thought, and combining symbolic and neural approaches."
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
            <p className="section-subtitle">
              Exploring the intersection of artificial intelligence, computer vision, and real-world applications
            </p>
          </motion.div>

          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="research-card"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="card-icon">
                  <area.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="card-title">{area.title}</h3>
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
                My research is driven by the belief that artificial intelligence should be both 
                theoretically sound and practically impactful. I focus on developing robust, 
                interpretable, and efficient AI systems that can address real-world challenges 
                across various domains. Through interdisciplinary collaboration and rigorous 
                experimentation, I aim to advance the state-of-the-art while ensuring that 
                the developed technologies are accessible and beneficial to society.
              </p>
              
              <div className="current-focus">
                <h4>Current Focus Areas:</h4>
                <ul>
                  <li>Retrieval-augmented generation for domain-specific applications</li>
                  <li>Multi-agent orchestration and collaboration patterns</li>
                  <li>LLM safety mechanisms and alignment techniques</li>
                  <li>Efficient fine-tuning and prompt optimization strategies</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchInterests