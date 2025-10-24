import React from 'react'
import { FileText, Github, ExternalLink, Globe, FlaskConical, Presentation, Video, FileImage, GraduationCap } from 'lucide-react'
import './Publications.css'

const Publications = () => {
  const publications = [
    {
      title: "PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements",
      authors: "Petros Raptopoulos, Giorgos Filandrianos, Maria Lymperaiou, Giorgos Stamou",
      venue: "Oral Presentation at Main Conference of Empirical Methods in Natural Language Processing (EMNLP)",
      year: "2025",
      type: "Conference",
      image: "/images/PAKTON_paper.jpg",
      pdfLink: "https://arxiv.org/pdf/2506.00608",
      abstract: "Contract review is a complex and time-intensive task that typically demands specialized legal expertise, rendering it largely inaccessible to non-experts. Moreover, legal interpretation is rarely straightforward-ambiguity is pervasive, and judgments often hinge on subjective assessments. Compounding these challenges, contracts are usually confidential, restricting their use with proprietary models and necessitating reliance on open-source alternatives. To address these challenges, we introduce PAKTON: a fully open-source, end-to-end, multi-agent framework with plug-and-play capabilities. PAKTON is designed to handle the complexities of contract analysis through collaborative agent workflows and a novel retrieval-augmented generation (RAG) component, enabling automated legal document review that is more accessible, adaptable, and privacy-preserving. Experiments demonstrate that PAKTON outperforms both general-purpose and pretrained models in predictive accuracy, retrieval performance, explainability, completeness, and grounded justifications as evaluated through a human study and validated with automated metrics.",
      links: {
        paper: "https://arxiv.org/abs/2506.00608",
        paperLabel: "Paper",
        code: "https://github.com/petrosrapto/PAKTON",
        website: "https://pakton.site/",
        evaluation: "https://pakton.site/evaluation/",
        poster: "/files/EMNLP 2025_main-863_poster.pdf",
        slides: "/files/EMNLP 2025_main-863_slides.pdf",
        video: "https://drive.google.com/file/d/1xiVGc8zVxImFo4aX-bTOh1BcEN7pdFm5/view?usp=drive_link"
      }
    }
  ]

  return (
    <section id="publications" className="section publications">
      <div className="container">
        <div className="section-header">
          <h2>
            Publications
            <a 
              href="https://scholar.google.com/citations?user=G7paGngAAAAJ&hl=en&oi=ao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="scholar-icon-link"
              aria-label="Google Scholar"
              title="View on Google Scholar"
            >
              <GraduationCap size={20} />
            </a>
          </h2>
        </div>

        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <div className="publication-content">
                {pub.image && (
                  <div className="pub-image">
                    <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer">
                      <img src={pub.image} alt={pub.title} />
                    </a>
                  </div>
                )}
                
                <div className="pub-details">
                  <h3 className="pub-title">{pub.title}</h3>
                  
                  <div className="pub-authors">{pub.authors}</div>
                  
                  <div className="pub-venue">
                    <span className="venue-name">{pub.venue}, {pub.year}</span>
                  </div>
                  
                  {pub.abstract && (
                    <div className="pub-abstract">
                      <p>{pub.abstract}</p>
                    </div>
                  )}
                  
                  <div className="pub-links">
                    {pub.links.paper && (
                      <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="pub-link" title="View on arXiv">
                        <img src="/images/arxiv-logo.svg" alt="arXiv" className="arxiv-icon" />
                        <span>{pub.links.paperLabel || "Paper"}</span>
                      </a>
                    )}
                    {pub.links.code && pub.links.code !== "#" && (
                      <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="pub-link" title="View GitHub Repository">
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {pub.links.website && (
                      <a href={pub.links.website} target="_blank" rel="noopener noreferrer" className="pub-link" title="Visit Project Website">
                        <Globe size={16} />
                        <span>Website</span>
                      </a>
                    )}
                    {pub.links.evaluation && (
                      <a href={pub.links.evaluation} target="_blank" rel="noopener noreferrer" className="pub-link" title="View Evaluation">
                        <FlaskConical size={16} />
                        <span>Evaluation</span>
                      </a>
                    )}
                    {pub.links.poster && (
                      <a href={pub.links.poster} target="_blank" rel="noopener noreferrer" className="pub-link" title="Download Poster">
                        <FileImage size={16} />
                        <span>Poster</span>
                      </a>
                    )}
                    {pub.links.slides && (
                      <a href={pub.links.slides} target="_blank" rel="noopener noreferrer" className="pub-link" title="Download Slides">
                        <Presentation size={16} />
                        <span>Slides</span>
                      </a>
                    )}
                    {pub.links.video && (
                      <a href={pub.links.video} target="_blank" rel="noopener noreferrer" className="pub-link" title="Watch Recording">
                        <Video size={16} />
                        <span>Recording</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
