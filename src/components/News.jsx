import React from 'react'
import { Calendar } from 'lucide-react'
import './News.css'

const News = () => {
  const newsItems = [
    {
      date: "15 April 2026",
      title: "Accepted for PhD (starting June 2026) at UKP Lab, TU Darmstadt, under the supervision of Prof. Iryna Gurevych. Will be working on the HAICC project (Human-AI Collaboration for Cybersecurity) within ATHENE, exploring how reinforcement-learned LLM agents can advance CVE retrieval."
    },
    {
      date: "7 February 2026",
      title: "Developed Le Sésame, an interactive game and research platform exploring LLM security through adversarial secret extraction, as part of the Moonshot Interview Challenge for Mistral AI."
    },
    {
      date: "6 November 2025",
      title: "Presented PAKTON at EMNLP 2025 in Suzhou, China"
    }, 
    {
      date: "20 August 2025",
      title: "Publication: 'PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements' accepted at the Main Conference of EMNLP 2025 for oral presentation"
    }, 
    {
      date: "19 July 2025",
      title: "Poster presentation of PAKTON at Greeks In AI Symposium"
    },  
    {
      date: "3 July 2025",
      title: "Defended MSc Thesis and Graduated from NTUA with BSc & MSc in Electrical and Computer Engineering"
    },  
    {
      date: "28 March 2025",
      title: "Demonstrated PAKTON at Athens Legal AI Hackathon by Archimedes"
    },
    {
      date: "1 October 2024",
      title: "Started position as AI Software Engineer at VeltistonAI"
    }
  ]

  return (
    <section id="news" className="section news">
      <div className="container">
        <div className="section-header">
          <h2>News</h2>
        </div>

        <div className="news-list">
          {newsItems.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-date">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>
              <div className="news-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
