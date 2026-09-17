import { signature } from '../data/site.js'

export default function Signature() {
  return (
    <section className="section" id="signature">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">What people come for</p>
          <h2 className="title">The plates that made the name.</h2>
          <p className="lede">Hot from the kitchen all day. Tiffin in the morning and evening, meals on a banana leaf at noon.</p>
        </div>
        <div className="dishes reveal">
          {signature.map((d) => (
            <article className="dish" key={d.name}>
              {d.image ? (
                <div className="media">
                  <img src={d.image} alt={d.alt} loading="lazy" decoding="async" style={d.pos ? { objectPosition: d.pos } : undefined} />
                </div>
              ) : (
                <div className={'media' + (d.tone ? ' ' + d.tone : '')}>
                  <span className="big" aria-hidden="true">{d.glyph}</span>
                </div>
              )}
              <div className="body">
                <div className="ta" lang="ta">{d.ta}</div>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
