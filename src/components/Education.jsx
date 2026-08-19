import { education } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Education() {
  const [ref, inView] = useReveal()
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-heading accent-heading">Education</h2>
        <div className={`education-list reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          {education.map((e) => (
            <article className="education-card" key={e.school}>
              <div className="education-icon">🎓</div>
              <div className="education-main">
                <div className="education-topline"><span className="year-pill">{e.period}</span></div>
                <h3>{e.degree}</h3>
                <p className="edu-school-name">{e.school}</p>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
