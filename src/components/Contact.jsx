import { profile } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const [ref, inView] = useReveal()
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-heading accent-heading">Contact</h2>
        <div className={`contact-layout reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <div className="contact-info">
            <p className="contact-intro">I'm open to connecting with recruiters, developers, and teams for software development opportunities.</p>
            <a href={`mailto:${profile.email}`} className="contact-line"><span>✉</span>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\D/g, '')}`} className="contact-line"><span>⌕</span>{profile.phone}</a>
            <div className="contact-line"><span>⌖</span>{profile.location}</div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">LeetCode</a>
            </div>
          </div>
          <div className="connect-card">
            <h3>Let's Connect</h3>
            <p>Whether you want to discuss technology, collaborate on a project, or explore opportunities, feel free to reach out.</p>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">Send Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
