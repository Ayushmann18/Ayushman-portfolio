import { useEffect, useState } from 'react'
import { profile, intro } from '../data/data.js'

const roles = ['Computer Science Student', 'Software Developer', 'Problem Solver']

export default function Hero() {
  const [role, setRole] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRole((r) => (r + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-meta"><span className="dot" aria-hidden="true" /> B.Tech CSE · SRM IST</span>
          <h1>Ayushman Choudhary</h1>
          <div className="hero-slideshow" aria-live="polite">
            <span key={role} className="slide-text">{roles[role]}</span>
          </div>
          <p className="hero-intro">{intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={profile.resumeFile} className="btn btn-secondary" target="_blank" rel="noreferrer">Resume</a>
            <a href={profile.github} className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src="/ayushman-photo.jpg" alt="Ayushman Kumar Choudhary" className="hero-photo" />
          </div>
          <div className="photo-caption"><span className="dot" /> building · learning · solving</div>
        </div>
      </div>
    </header>
  )
}
