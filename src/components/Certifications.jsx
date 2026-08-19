import { certifications } from '../data/data.js'
import { getIcon } from '../icons.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Certifications() {
  const [ref, inView] = useReveal()
  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-heading accent-heading">Certifications</h2>
        <div className={`cert-grid reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          {certifications.map((c) => {
            const Icon = getIcon(c.icon)
            return <article className="cert-card" key={c.name}>
              <div className="cert-icon-row"><span className="cert-issuer">{c.issuer}</span>{Icon && <Icon size={22} color={c.color} aria-hidden="true" />}</div>
              <div className="cert-name">{c.name}</div>
              <a className="cert-verify" href={c.url} target="_blank" rel="noreferrer">Verify Certificate →</a>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
