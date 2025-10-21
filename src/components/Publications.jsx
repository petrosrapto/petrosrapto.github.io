import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, FileText, Award, Users } from 'lucide-react'
import './Publications.css'

const Publications = () => {
  const publications = [
    {
      title: "Advanced Deep Learning Techniques for Real-Time Object Detection in Autonomous Systems",
      authors: "Petros Raptopoulos, Jane Smith, Michael Johnson",
      venue: "International Conference on Computer Vision (ICCV)",
      year: "2025",
      type: "Conference",
      status: "Accepted",
      abstract: "This paper presents novel deep learning architectures that achieve state-of-the-art performance in real-time object detection for autonomous vehicle applications...",
      links: {
        paper: "#",
        code: "#",
        project: "#"
      },
      featured: true
    },
    {
      title: "Self-Supervised Learning for Medical Image Analysis: A Comprehensive Study",
      authors: "Petros Raptopoulos, Sarah Davis, Robert Wilson",
      venue: "Nature Machine Intelligence",
      year: "2024",
      type: "Journal",
      status: "Published",
      abstract: "We investigate the effectiveness of self-supervised learning approaches in medical imaging tasks, demonstrating significant improvements over traditional supervised methods...",
      links: {
        paper: "#",
        code: "#"
      },
      featured: true
    },
    {
      title: "Efficient Neural Architecture Search for Edge Devices",
      authors: "Petros Raptopoulos, Alex Chen, Maria Garcia",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2024",
      type: "Conference",
      status: "Published",
      abstract: "This work introduces a novel neural architecture search method specifically designed for resource-constrained edge devices, achieving optimal trade-offs between accuracy and efficiency...",
      links: {
        paper: "#",
        code: "#",
        project: "#"
      }
    },
    {
      title: "Multimodal Learning for Visual Question Answering",
      authors: "Petros Raptopoulos, Lisa Zhang, David Brown",
      venue: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2023",
      type: "Conference",
      status: "Published",
      abstract: "We propose a novel multimodal architecture that effectively combines visual and textual information for improved performance in visual question answering tasks...",
      links: {
        paper: "#",
        project: "#"
      }
    },
    {
      title: "Interpretable AI for Healthcare: Bridging the Gap Between Research and Clinical Practice",
      authors: "Petros Raptopoulos, Emma Thompson, James Lee",
      venue: "IEEE Transactions on Medical Imaging",
      year: "2023",
      type: "Journal",
      status: "Published",
      abstract: "This comprehensive review examines the current state of interpretable AI in healthcare applications and provides guidelines for developing clinically viable AI systems...",
      links: {
        paper: "#"
      }
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
    <section id="publications" className="section publications">
      <div className="container">
        <motion.div 
          className="publications-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Publications</h2>
            <p className="section-subtitle">
              Selected research contributions in computer vision, machine learning, and artificial intelligence
            </p>
          </motion.div>

          <div className="publications-list">
            {publications.map((pub, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`publication-card ${pub.featured ? 'featured' : ''}`}
              >
                {pub.featured && (
                  <div className="featured-badge">
                    <Award size={16} />
                    Featured
                  </div>
                )}
                
                <div className="publication-header">
                  <div className="publication-meta">
                    <span className={`publication-type ${pub.type.toLowerCase()}`}>
                      {pub.type}
                    </span>
                    <span className={`publication-status ${pub.status.toLowerCase()}`}>
                      {pub.status}
                    </span>
                    <span className="publication-year">{pub.year}</span>
                  </div>
                </div>

                <h3 className="publication-title">{pub.title}</h3>
                
                <div className="publication-authors">
                  <Users size={16} />
                  <span>{pub.authors}</span>
                </div>
                
                <div className="publication-venue">
                  <BookOpen size={16} />
                  <span>{pub.venue}</span>
                </div>
                
                <p className="publication-abstract">
                  {pub.abstract}
                </p>
                
                <div className="publication-links">
                  {pub.links.paper && (
                    <a href={pub.links.paper} className="pub-link paper">
                      <FileText size={16} />
                      Paper
                    </a>
                  )}
                  {pub.links.code && (
                    <a href={pub.links.code} className="pub-link code">
                      <ExternalLink size={16} />
                      Code
                    </a>
                  )}
                  {pub.links.project && (
                    <a href={pub.links.project} className="pub-link project">
                      <ExternalLink size={16} />
                      Project
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="publications-footer">
            <p>
              For a complete list of publications, visit my 
              <a href="https://scholar.google.com/citations?user=PLACEHOLDER" target="_blank" rel="noopener noreferrer">
                Google Scholar profile
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications