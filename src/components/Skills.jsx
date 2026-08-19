import { skills } from '../data/data.js'
import { getIcon } from '../icons.js'
import { useReveal } from '../hooks/useReveal.js'

function SkillTag({ item }) {
  const Icon = item.icon ? getIcon(item.icon) : null
  return (
    <span className="tag" style={{ '--brand': item.color || 'var(--accent)' }}>
      {Icon && <Icon size={14} aria-hidden="true" />}
      {item.name}
    </span>
  )
}

export default function Skills() {
  const [ref, inView] = useReveal()

  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">skills</span>
        <h2 className="section-heading">Technical skills</h2>
        <div className={`skills-grid reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          {skills.map((block) => (
            <div className="skill-block" key={block.category}>
              <h3>{block.category}</h3>
              <div className="tag-row">
                {block.items.map((item) => (
                  <SkillTag item={item} key={item.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
