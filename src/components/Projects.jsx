import { projects } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

function Diagram({ stages }) {
  return <div className="diagram" aria-label="Architecture diagram">
    {stages.map((stage, i) => <span key={stage} className="diagram-stage"><span className="diagram-node">{stage}</span>{i < stages.length - 1 && <span className="diagram-arrow">→</span>}</span>)}
  </div>
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const [ref, inView] = useReveal()

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading accent-heading">What I've built</h2>
        {featured && <div className={`featured-project reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <div className="featured-top">
            <span className="featured-label">featured project</span>
            <h3>{featured.name}</h3>
            <p className="featured-tagline">{featured.description}</p>
            <div className="stack-row">{featured.stack.map((s) => <span className="tag-sm" key={s}>{s}</span>)}</div>
            <ul className="highlight-list">{featured.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
          </div>
          <Diagram stages={featured.architecture} />
          <div className="featured-actions">
            <a href={featured.github} className="btn btn-primary" target="_blank" rel="noreferrer">{featured.githubLabel}</a>
          </div>
        </div>}

        <div className="project-grid">
          {rest.map((p) => <article className="project-card" key={p.id}>
            <h3>{p.name}</h3>
            <p className="project-tagline">{p.tagline}</p>
            <p className="project-desc">{p.description}</p>
            <div className="stack-row">{p.stack.map((s) => <span className="tag-sm" key={s}>{s}</span>)}</div>
            <ul className="highlight-list">{p.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
            <div className="project-card-actions"><a href={p.github} className="btn btn-secondary" target="_blank" rel="noreferrer">{p.githubLabel}</a></div>
          </article>)}
        </div>
      </div>
    </section>
  )
}
