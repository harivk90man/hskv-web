import { stats } from '../data/site.js'

export default function Highlights() {
  return (
    <section className="band" aria-label="Highlights">
      <div className="wrap" style={{ padding: '28px 20px' }}>
        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="v">{s.value}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
