import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Brain, Cpu, Camera, Network, Zap } from 'lucide-react'
import './ResearchInterests.css'

const ResearchInterests = () => {
  const researchAreas = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Developing advanced algorithms for image understanding, object detection, and scene analysis. Focus on real-time applications and robust performance across diverse environments.",
      keywords: ["Object Detection", "Image Segmentation", "Visual Recognition", "Scene Understanding"]
    },
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Designing novel neural network architectures and training methodologies. Specializing in convolutional networks, attention mechanisms, and self-supervised learning approaches.",
      keywords: ["Neural Networks", "CNN", "Transformers", "Self-Supervised Learning"]
    },
    {
      icon: Cpu,
      title: "AI for Robotics",
      description: "Bridging computer vision and robotics through intelligent perception systems. Developing solutions for autonomous navigation, manipulation, and human-robot interaction.",
      keywords: ["Autonomous Systems", "Robot Vision", "SLAM", "Motion Planning"]
    },
    {
      icon: Camera,
      title: "Medical Imaging",
      description: "Applying AI techniques to medical image analysis for diagnostic assistance and treatment planning. Focus on interpretable models and clinical validation.",
      keywords: ["Medical AI", "Diagnostic Imaging", "Healthcare", "Clinical Applications"]
    },
    {
      icon: Network,
      title: "Multimodal Learning",
      description: "Exploring the integration of multiple data modalities to create more comprehensive AI systems. Research in vision-language models and cross-modal understanding.",
      keywords: ["Multimodal AI", "Vision-Language", "Cross-Modal", "Fusion Techniques"]
    },
    {
      icon: Zap,
      title: "Efficient AI",
      description: "Developing lightweight and efficient AI models for edge deployment. Focus on model compression, quantization, and hardware-aware optimization techniques.",
      keywords: ["Edge AI", "Model Compression", "Optimization", "Real-time Processing"]
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
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    <area.icon size={28} />
                  </div>
                  <h3>{area.title}</h3>
                </div>
                
                <p className="card-description">
                  {area.description}
                </p>
                
                <div className="card-keywords">
                  {area.keywords.map((keyword, keyIndex) => (
                    <span key={keyIndex} className="keyword-tag">
                      {keyword}
                    </span>
                  ))}
                </div>
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
                  <li>Self-supervised learning for visual representation</li>
                  <li>Efficient neural architectures for resource-constrained environments</li>
                  <li>Interpretable AI for high-stakes applications</li>
                  <li>Cross-modal learning and multimodal understanding</li>
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