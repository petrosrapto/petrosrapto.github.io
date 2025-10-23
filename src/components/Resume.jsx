import React from 'react'
import { Download, GraduationCap, Briefcase, Award } from 'lucide-react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-header">
          <h2>Resume</h2>
          <a href="/CV.pdf" download className="btn btn-primary btn-download-header">
            <Download size={18} />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <div className="resume-section-icon">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3>Education</h3>
              <div className="cv-item">
                <div className="cv-header">
                  <h4>BSc & MSc in Electrical and Computer Engineering</h4>
                  <span className="cv-year">Sep 2019 – Jul 2025</span>
                </div>
                <div className="cv-institution">National Technical University of Athens (NTUA), Athens, Greece</div>
                <div className="cv-detail">5-year joint degree (300 ECTS)</div>
                <div className="cv-detail">Grade: 8.76/10 (top 10% among a graduate class of 300 students)</div>
                <div className="cv-detail">Major: Computer Science</div>
                <div className="cv-detail">
                  <strong>Relevant Coursework:</strong> Artificial Intelligence (8/10), Machine Learning (8/10), Neural Networks and Deep Learning (10/10), Image and Video Analysis and Technology (10/10), Advanced Topics in Artificial Intelligence (10/10)
                </div>
                <div className="cv-detail">
                  <strong>Thesis:</strong> "PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements" 
                  <span className="cv-grade"> • Course: Artificial Intelligence • Grade: 10/10</span>
                </div>
              </div>
              
              <div className="cv-item">
                <div className="cv-header">
                  <h4>Nationwide University Entrance Examination</h4>
                  <span className="cv-year">Jun 2019</span>
                </div>
                <div className="cv-detail">Score: 18.576/20.000 (top 1% nationwide)</div>
              </div>
              
              <div className="cv-item">
                <div className="cv-header">
                  <h4>Evangelical Model High School of Smyrna</h4>
                  <span className="cv-year">Sep 2016 – Jun 2019</span>
                </div>
                <div className="cv-institution">Athens, Greece</div>
                <div className="cv-detail">Grade: 19.6/20</div>
              </div>
              
              <div className="cv-item">
                <div className="cv-header">
                  <h4>Evangelical Model Middle School of Smyrna</h4>
                  <span className="cv-year">Sep 2013 – Jun 2016</span>
                </div>
                <div className="cv-institution">Athens, Greece</div>
                <div className="cv-detail">Grade: 18.8/20</div>
                <div className="cv-detail">Admitted through competitive entrance exams, ranked 56th out of 521 applicants</div>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section-icon">
              <Briefcase size={20} />
            </div>
            <div>
              <h3>Professional & Research Experience</h3>
              <div className="cv-item">
                <div className="cv-header">
                  <h4>AI Software Engineer</h4>
                  <span className="cv-year">Oct 2024 – Present</span>
                </div>
                <div className="cv-institution">VeltistonAI, Athens, Greece</div>
                <ul className="cv-bullet-list">
                  <li>Carried out research in Multi-Agent LLM Systems and RAG pipelines applied in the legal domain</li>
                  <li>Worked on an LLM-powered Legal Assistant tool for contract comparison and negotiation analysis</li>
                  <li>Designed and built from scratch an agentic, MCP-based architecture for a healthcare chatbot with RAG and custom tools</li>
                  <li>Deployed LLMs on Cloud and on premise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
