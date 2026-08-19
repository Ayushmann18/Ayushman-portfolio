import { dsa } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function DSA() {
  const [ref, inView] = useReveal()
  return (
    <section id="problem-solving">
      <div className="container">
        <h2 className="section-heading accent-heading">Problem Solving</h2>
        <div className={`problem-panel reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <div>
            <div className="problem-count">{dsa.count}</div>
            <div className="problem-label">problems solved</div>
          </div>
          <div className="problem-platforms">
            {dsa.platforms.map((p) => <span className="tag" key={p}>{p}</span>)}
          </div>
          <a href={dsa.leetcode} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">LeetCode Profile</a>
        </div>
      </div>
    </section>
  )
}
