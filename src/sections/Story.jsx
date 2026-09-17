import { about } from '../data/site.js'
import { Leaf, Star, Clock } from '../icons.jsx'

const ICONS = [Leaf, Star, Clock]

export default function Story() {
  return (
    <section className="section band" id="story">
      <div className="wrap">
        <div className="story">
          <div className="pic reveal">
            <img src={about.image} alt={about.imageAlt} loading="lazy" decoding="async" />
            <span className="tag">{about.imageTag}</span>
          </div>
          <div className="reveal">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="title">{about.title}</h2>
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <ul className="feats">
              {about.features.map((f, i) => {
                const Ic = ICONS[i % ICONS.length]
                return (
                  <li key={f.title}>
                    <span className="ic"><Ic /></span>
                    <div><b>{f.title}</b><span>{f.text}</span></div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
