import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Award, Users, BookOpen } from 'lucide-react'
import './News.css'

const News = () => {
  const newsItems = [
    {
      date: "October 2024",
      type: "Publication",
      icon: BookOpen,
      title: "Two papers accepted at ICCV 2025!",
      description: "Excited to announce that our research on efficient neural architectures and multimodal learning has been accepted at the International Conference on Computer Vision 2025.",
      link: "#publications",
      highlight: true
    },
    {
      date: "September 2024",
      type: "Award",
      icon: Award,
      title: "Best Paper Award at CVPR Workshop",
      description: "Our work on self-supervised learning for medical imaging received the Best Paper Award at the CVPR 2024 Workshop on Medical Computer Vision.",
      link: "#publications"
    },
    {
      date: "August 2024",
      type: "Collaboration",
      icon: Users,
      title: "New Industry Partnership",
      description: "Initiated a collaborative research project with leading tech companies to develop AI solutions for autonomous systems and real-world applications.",
      link: "#"
    },
    {
      date: "July 2024",
      type: "Publication",
      icon: BookOpen,
      title: "Journal Article Published in Nature Machine Intelligence",
      description: "Our comprehensive study on interpretable AI for healthcare applications has been published in Nature Machine Intelligence.",
      link: "#publications"
    },
    {
      date: "June 2024",
      type: "Presentation",
      icon: Users,
      title: "Keynote Speaker at AI Conference",
      description: "Delivered a keynote presentation on 'The Future of Computer Vision in Real-World Applications' at the International AI Conference 2024.",
      link: "#"
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="news" className="section news">
      <div className="container">
        <motion.div 
          className="news-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Latest News</h2>
            <p className="section-subtitle">
              Recent achievements, publications, and updates from my research journey
            </p>
          </motion.div>

          <div className="news-timeline">
            {newsItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`news-item ${item.highlight ? 'highlight' : ''}`}
              >
                <div className="news-date">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                
                <div className="news-content-card">
                  <div className="news-header">
                    <div className="news-icon">
                      <item.icon size={20} />
                    </div>
                    <div className="news-meta">
                      <span className="news-type">{item.type}</span>
                      <h3 className="news-title">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="news-description">
                    {item.description}
                  </p>
                  
                  {item.link && (
                    <a href={item.link} className="news-link">
                      Learn more
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="news-footer">
            <p>Stay updated with my latest research and achievements by following my social media channels.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default News