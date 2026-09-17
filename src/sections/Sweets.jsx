import { sweets, site } from '../data/site.js'
import { Phone, WhatsApp } from '../icons.jsx'

export default function Sweets() {
  return (
    <section className="section band" id="sweets">
      <div className="wrap">
        <div className="sweets">
          <div className="grid reveal">
            {sweets.images.map((im) => <img key={im.src} src={im.src} alt={im.alt} loading="lazy" decoding="async" />)}
          </div>
          <div className="reveal">
            <p className="eyebrow">{sweets.eyebrow}</p>
            <div className="brand-line"><b>{sweets.name}</b><span>{sweets.sub}</span></div>
            <p className="ta" lang="ta" style={{ fontFamily: 'var(--tamil)', fontWeight: 600, margin: '4px 0 14px' }}>{sweets.nameTa}</p>
            <h2 className="title" style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>{sweets.title}</h2>
            {sweets.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <div className="ctas">
              <a className="btn leaf" href={site.phones[1].tel}><Phone />Call for gift boxes</a>
              <a className="btn wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp />WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
