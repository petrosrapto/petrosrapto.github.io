import React from 'react'
import { motion } from 'framer-motion'
import { Download, GraduationCap, Briefcase, Award, Code } from 'lucide-react'
import './Resume.css'

const Resume = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Excellence",
      year: "2020-2024",
      description: "Dissertation: Advanced Deep Learning Techniques for Computer Vision Applications"
    },
    {
      degree: "M.Sc. in Artificial Intelligence",
      institution: "Technical University",
      year: "2018-2020",
      description: "Specialized in Machine Learning and Neural Networks"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "State University",
      year: "2014-2018",
      description: "Graduated Summa Cum Laude, Focus on Software Engineering and Mathematics"
    }
  ]

  const experience = [
    {
      title: "Senior Research Scientist",
      company: "AI Research Lab",
      year: "2024-Present",
      description: "Leading research projects in computer vision and deep learning, managing a team of 5 researchers."
    },
    {
      title: "Research Intern",
      company: "Tech Giant Corp",
      year: "2023",
      description: "Developed novel algorithms for real-time object detection in autonomous vehicles."
    },
    {
      title: "Graduate Research Assistant",
      company: "University Research Center",
      year: "2020-2024",
      description: "Conducted research in self-supervised learning and published 10+ papers in top-tier conferences."
    }
  ]

  const skills = [
    { category: "Programming", items: ["Python", "PyTorch", "TensorFlow", "C++", "CUDA", "JavaScript"] },
    { category: "AI/ML", items: ["Deep Learning", "Computer Vision", "Neural Networks", "Transformers", "GANs"] },
    { category: "Tools", items: ["Docker", "Git", "Linux", "AWS", "Jupyter", "MLflow"] },
    { category: "Research", items: ["Paper Writing", "Statistical Analysis", "Experimental Design", "Peer Review"] }
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
    <section id="resume" className="section resume">
      <div className="container">
        <motion.div 
          className="resume-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Resume</h2>
            <p className="section-subtitle">
              My academic and professional journey in computer vision and AI research
            </p>
            <a href="/resume.pdf" className="btn btn-primary" download>
              <Download size={18} />
              Download PDF
            </a>
          </motion.div>

          <div className="resume-grid">
            <motion.div variants={itemVariants} className="resume-section">
              <div className="section-title">
                <GraduationCap size={24} />
                <h3>Education</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="resume-item">
                  <div className="item-header">
                    <h4>{edu.degree}</h4>
                    <span className="year">{edu.year}</span>
                  </div>
                  <p className="institution">{edu.institution}</p>
                  <p className="description">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="resume-section">
              <div className="section-title">
                <Briefcase size={24} />
                <h3>Experience</h3>
              </div>
              {experience.map((exp, index) => (
                <div key={index} className="resume-item">
                  <div className="item-header">
                    <h4>{exp.title}</h4>
                    <span className="year">{exp.year}</span>
                  </div>
                  <p className="institution">{exp.company}</p>
                  <p className="description">{exp.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="skills-section">
            <div className="section-title">
              <Code size={24} />
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume