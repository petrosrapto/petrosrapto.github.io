import React from 'react'
import { Calendar } from 'lucide-react'
import './News.css'

const News = () => {
  const newsItems = [
    {
      date: "July 2025",
      title: "Poster presentation at Greeks In AI Symposium"
    },
    {
      date: "March 2025",
      title: "Demonstrated PAKTON at Athens Legal AI Hackathon by Archimedes"
    },
    {
      date: "October 2024",
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
