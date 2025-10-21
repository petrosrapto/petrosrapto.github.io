import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react'
import './OpenSourceProjects.css'

const OpenSourceProjects = () => {
  const projects = [
    {
      name: "DeepVision Toolkit",
      description: "A comprehensive Python library for computer vision tasks, featuring state-of-the-art models and easy-to-use APIs for object detection, image segmentation, and feature extraction.",
      tech: ["Python", "PyTorch", "OpenCV", "NumPy"],
      stats: { stars: 1284, forks: 203, watchers: 87 },
      links: {
        github: "https://github.com/petrosrapto/deepvision-toolkit",
        demo: "https://deepvision-demo.com",
        docs: "https://deepvision-toolkit.readthedocs.io"
      },
      featured: true
    },
    {
      name: "Neural Architecture Search",
      description: "Implementation of advanced neural architecture search algorithms with support for various search strategies and hardware constraints optimization.",
      tech: ["Python", "TensorFlow", "Keras", "Docker"],
      stats: { stars: 892, forks: 156, watchers: 45 },
      links: {
        github: "https://github.com/petrosrapto/nas-framework",
        docs: "https://nas-framework.readthedocs.io"
      },
      featured: true
    },
    {
      name: "Medical Image Analysis Suite",
      description: "A specialized toolkit for medical image processing and analysis, including preprocessing, segmentation, and diagnostic assistance tools.",
      tech: ["Python", "SimpleITK", "Matplotlib", "Scikit-learn"],
      stats: { stars: 567, forks: 89, watchers: 32 },
      links: {
        github: "https://github.com/petrosrapto/medical-imaging-suite",
        demo: "https://medical-demo.com"
      }
    },
    {
      name: "Real-time Object Tracking",
      description: "High-performance object tracking system optimized for real-time applications, supporting multiple tracking algorithms and video formats.",
      tech: ["C++", "OpenCV", "CUDA", "Python"],
      stats: { stars: 423, forks: 67, watchers: 28 },
      links: {
        github: "https://github.com/petrosrapto/realtime-tracking",
        demo: "https://tracking-demo.com"
      }
    },
    {
      name: "Edge AI Optimizer",
      description: "Tools and utilities for optimizing deep learning models for edge deployment, including quantization, pruning, and hardware-specific optimizations.",
      tech: ["Python", "ONNX", "TensorRT", "OpenVINO"],
      stats: { stars: 341, forks: 52, watchers: 19 },
      links: {
        github: "https://github.com/petrosrapto/edge-ai-optimizer"
      }
    },
    {
      name: "Vision Datasets Hub",
      description: "A centralized repository of computer vision datasets with standardized APIs, preprocessing pipelines, and evaluation metrics.",
      tech: ["Python", "HuggingFace", "Pandas", "AWS S3"],
      stats: { stars: 289, forks: 41, watchers: 15 },
      links: {
        github: "https://github.com/petrosrapto/vision-datasets-hub",
        docs: "https://vision-datasets.readthedocs.io"
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
          className="projects-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Open Source Projects</h2>
            <p className="section-subtitle">
              Contributing to the open source community with tools and libraries for computer vision and AI research
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    Featured
                  </div>
                )}

                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
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

          <motion.div variants={itemVariants} className="projects-footer">
            <p>
              Explore more projects on my 
              <a href="https://github.com/petrosrapto" target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenSourceProjects