import { experience } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Experience() {
  const [ref, inView] = useReveal()
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-heading accent-heading">Experience</h2>
        <div className={`exp-card reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <div className="exp-head">
            <div>
              <div className="exp-role">{experience.role}</div>
              <div className="exp-company">{experience.company} · {experience.type}</div>
            </div>
            <span className="exp-period">{experience.period}</span>
          </div>
          <ul className="exp-points">{experience.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
          <div className="exp-footer"><a href={experience.certificateFile} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">View Internship Certificate</a></div>
        </div>
      </div>
    </section>
  )
}
