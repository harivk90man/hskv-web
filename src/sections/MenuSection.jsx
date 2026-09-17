import { useState } from 'react'
import { menu, site } from '../data/site.js'
import { Arrow } from '../icons.jsx'

export default function MenuSection() {
  const [tab, setTab] = useState(0)
  const cat = menu[tab]
  return (
    <section className="section" id="menu">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Menu</p>
          <h2 className="title">South Indian at heart, with room for a change of taste.</h2>
          <p className="lede">Pure vegetarian, every dish, every day. Prices stay pocket-friendly.</p>
        </div>
        <div className="reveal">
          <div className="tabs" role="tablist" aria-label="Menu sections">
            {menu.map((m, i) => (
              <button key={m.title} role="tab" aria-selected={tab === i} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>{m.title}</button>
            ))}
          </div>
          <div className="menu-card" role="tabpanel">
            <p className="note">{cat.note}</p>
            <ul className="menu-list">
              {cat.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <div className="menu-foot">
              <p className="hint">The full menu with today's prices is at the counter. For delivery, order online:</p>
              {site.order.map((o) => (
                <a key={o.name} className="btn soft" href={o.url} target="_blank" rel="noopener noreferrer">{o.name}<Arrow /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
