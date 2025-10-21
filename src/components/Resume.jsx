import React from 'react'
import { motion } from 'framer-motion'
import { Download, GraduationCap, Briefcase, Award, Code, Trophy, FileText, Users } from 'lucide-react'
import './Resume.css'

const Resume = () => {
  const education = [
    {
      degree: "BSc & MSc in Electrical and Computer Engineering",
      institution: "National Technical University of Athens (NTUA)",
      year: "2019-2025",
      grade: "8.76/10 (top 10%)",
      description: "5-year joint degree (300 ECTS) • Major: Computer Science • Thesis: 'PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements' (Grade: 10/10)",
      highlights: ["AI (8/10)", "Machine Learning (8/10)", "Neural Networks & Deep Learning (10/10)", "Image & Video Analysis (10/10)", "Advanced AI Topics (10/10)"]
    },
    {
      degree: "High School Diploma",
      institution: "Evangelical Model High School of Smyrna",
      year: "2016-2019",
      grade: "19.6/20",
      description: "University Entrance Exam: 18.576/20.000 (top 1% nationwide)"
    },
    {
      degree: "Middle School Certificate",
      institution: "Evangelical Model Middle School of Smyrna",
      year: "2013-2016",
      grade: "18.8/20",
      description: "Admitted through competitive entrance exams, ranked 56th out of 521 applicants"
    }
  ]

  const experience = [
    {
      title: "AI Software Engineer",
      company: "VeltistonAI",
      location: "Athens, Greece",
      year: "2024-Present",
      description: "Research in Multi-Agent LLM Systems and RAG pipelines applied in the legal domain",
      highlights: [
        "LLM-powered Legal Assistant tool for contract comparison and negotiation analysis",
        "Designed agentic, MCP-based architecture for healthcare chatbot with RAG and custom tools",
        "Deployed LLMs on Cloud and on-premise infrastructure"
      ]
    }
  ]

  const publications = [
    {
      title: "PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements",
      authors: "Petros Raptopoulos, Giorgos Filandrianos, Maria Lymperaiou, Giorgos Stamou",
      venue: "EMNLP Main Conference, Oral Presentation, 2025",
      link: "https://arxiv.org/abs/2506.00608",
      description: "Fully open-source, end-to-end, multi-agent LLM framework with plug-and-play capabilities for contract analysis using a novel RAG component"
    }
  ]

  const awards = [
    {
      title: "State Scholarship (IKY)",
      organization: "State Scholarships Foundation",
      years: ["2019-2020", "2020-2021", "2022-2023"],
      description: "For diligent students belonging to Vulnerable Social Groups"
    }
  ]

  const competitions = [
    {
      title: "Greeks In AI Symposium",
      role: "Poster Presentation",
      year: "2025"
    },
    {
      title: "Athens Legal AI Hackathon 2025",
      role: "PAKTON Demonstration",
      organization: "Archimedes",
      year: "2025"
    },
    {
      title: "PanHellenic Informatics Competition",
      role: "Participant (28th, 29th, 30th editions)",
      years: "2015-2018",
      description: "Implementation of algorithmic solutions using C++"
    },
    {
      title: "CanSat In Greece 2018",
      role: "Satellite Development",
      description: "Using Arduino"
    }
  ]

  const skills = [
    { category: "AI/ML", items: ["Multi-Agent Systems", "Large Language Models", "RAG Pipelines", "Deep Learning", "Neural Networks", "Computer Vision"] },
    { category: "Programming", items: ["Python", "C++", "JavaScript", "PyTorch", "TensorFlow", "Arduino"] },
    { category: "Specialized", items: ["Legal AI", "Healthcare AI", "Contract Analysis", "MCP Architecture", "Cloud Deployment"] },
    { category: "Languages", items: ["Greek (Native)", "English (C2)", "German (B2)"] }
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
              My journey in AI, Machine Learning, and Legal Technology
            </p>
            <a href="/CV.pdf" className="btn btn-primary" download>
              <Download size={18} />
              Download PDF
            </a>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="timeline-section">
            <div className="section-title">
              <GraduationCap size={24} />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < education.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="item-header">
                      <h4>{edu.degree}</h4>
                      <span className="year">{edu.year}</span>
                    </div>
                    <p className="institution">{edu.institution}</p>
                    {edu.grade && <p className="grade">Grade: {edu.grade}</p>}
                    <p className="description">{edu.description}</p>
                    {edu.highlights && (
                      <div className="highlights">
                        {edu.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="highlight-tag">{highlight}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="timeline-section">
            <div className="section-title">
              <Briefcase size={24} />
              <h3>Professional Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < experience.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="item-header">
                      <h4>{exp.title}</h4>
                      <span className="year">{exp.year}</span>
                    </div>
                    <p className="institution">{exp.company} • {exp.location}</p>
                    <p className="description">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="highlight-list">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications Section */}
          <motion.div variants={itemVariants} className="timeline-section">
            <div className="section-title">
              <FileText size={24} />
              <h3>Publications</h3>
            </div>
            <div className="timeline">
              {publications.map((pub, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="publication-item">
                      <h4 className="publication-title">{pub.title}</h4>
                      <p className="publication-authors">{pub.authors}</p>
                      <p className="publication-venue">{pub.venue}</p>
                      <p className="description">{pub.description}</p>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                        View Paper →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Competitions Section */}
          <div className="awards-competitions-grid">
            <motion.div variants={itemVariants} className="timeline-section">
              <div className="section-title">
                <Award size={24} />
                <h3>Honors & Awards</h3>
              </div>
              <div className="awards-list">
                {awards.map((award, index) => (
                  <div key={index} className="award-item">
                    <h4>{award.title}</h4>
                    <p className="institution">{award.organization}</p>
                    <p className="award-years">{award.years.join(', ')}</p>
                    <p className="description">{award.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="timeline-section">
              <div className="section-title">
                <Trophy size={24} />
                <h3>Competitions & Events</h3>
              </div>
              <div className="competitions-list">
                {competitions.map((comp, index) => (
                  <div key={index} className="competition-item">
                    <h4>{comp.title}</h4>
                    <p className="competition-role">{comp.role}</p>
                    {comp.organization && <p className="institution">{comp.organization}</p>}
                    <p className="year">{comp.years || comp.year}</p>
                    {comp.description && <p className="description">{comp.description}</p>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
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