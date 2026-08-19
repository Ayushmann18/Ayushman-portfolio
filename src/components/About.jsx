import { about } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const paragraphs = about.split('\n\n')
  const [ref, inView] = useReveal()

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading accent-heading">About Me</h2>
        <div className={`about-wrap reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <div className="about-body">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-cards">
            <article className="about-feature-card">
              <div className="feature-icon">◉</div>
              <h3>Who I Am</h3>
              <p>Computer Science and Engineering student at SRM Institute of Science &amp; Technology, focused on software development and practical technology.</p>
            </article>
            <article className="about-feature-card">
              <div className="feature-icon">&lt;/&gt;</div>
              <h3>What I Do</h3>
              <p>Build full-stack applications, explore AI/ML concepts, and strengthen problem-solving through hands-on projects.</p>
            </article>
            <article className="about-feature-card">
              <div className="feature-icon">↗</div>
              <h3>Career Goal</h3>
              <p>Grow as a software engineer by building reliable, useful software and contributing to real-world products.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
