import { site } from '../data/site.js'
import { Pin, Clock, Phone, WhatsApp, Arrow } from '../icons.jsx'

export default function Visit() {
  return (
    <section className="section" id="visit">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Visit</p>
          <h2 className="title">Opposite the east gopuram. You can't miss us.</h2>
        </div>
        <div className="visit">
          <div className="info reveal">
            <div className="row">
              <span className="ic"><Pin /></span>
              <div>
                <b>{site.address.line1}</b>
                <span>{site.address.line2}</span>
                <span className="ta" lang="ta">{site.address.ta}</span>
                <span>{site.address.landmark}</span>
              </div>
            </div>
            <div className="row">
              <span className="ic"><Clock /></span>
              <div><b>{site.hours.time}</b><span>{site.hours.days}, including festival days</span></div>
            </div>
            <div className="row">
              <span className="ic"><Phone /></span>
              <div>
                <b>Call us</b>
                {site.phones.map((p) => <a className="line" key={p.tel} href={p.tel}>{p.label}</a>)}
              </div>
            </div>
            <div className="ctas">
              <a className="btn primary" href={site.maps.directions} target="_blank" rel="noopener noreferrer"><Pin />Directions</a>
              <a className="btn wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp />WhatsApp</a>
              {site.order.map((o) => (
                <a key={o.name} className="btn soft" href={o.url} target="_blank" rel="noopener noreferrer">{o.name}<Arrow /></a>
              ))}
            </div>
          </div>
          <div className="map reveal">
            <iframe src={site.maps.embed} title="Map to Hotel Sri Krishna Vilas" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  )
}
