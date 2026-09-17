import { useEffect, useState } from 'react'
import { site, hero } from '../data/site.js'
import { openStatus } from '../lib/hours.js'
import { Pin, Phone, Clock } from '../icons.jsx'

export default function Hero() {
  const [status, setStatus] = useState(() => openStatus())
  useEffect(() => {
    const t = setInterval(() => setStatus(openStatus()), 60_000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <div className={'status' + (status.open ? '' : ' closed')}><span className="dot" />{status.text}</div>
          <p className="ta" lang="ta">{site.nameTa} · {site.kindTa}</p>
          <h1>{hero.title[0]} <em>{hero.title[1]}</em> {hero.title[2]}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="ctas">
            <a className="btn light" href={site.maps.directions} target="_blank" rel="noopener noreferrer"><Pin />Get directions</a>
            <a className="btn ghost" href={site.phones[0].tel}><Phone />{site.phones[0].label}</a>
          </div>
          <div className="meta">
            <span><Pin />{site.address.line1}, {site.city}</span>
            <span><Clock />{site.hours.time}, {site.hours.days.toLowerCase()}</span>
          </div>
        </div>
        <div className="hero-art">
          <img className="back" src={hero.image2} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img className="poster" src={hero.image} alt={hero.imageAlt} fetchPriority="high" decoding="async" width="640" height="640" />
          <span className="stamp">{hero.stamp}</span>
        </div>
      </div>
    </section>
  )
}
