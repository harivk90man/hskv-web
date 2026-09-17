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
            d.image ? (
              <article className="dish" key={d.name}>
                <img src={d.image} alt={d.alt} loading="lazy" decoding="async" style={d.pos ? { objectPosition: d.pos } : undefined} />
                <div className="body">
                  <div className="ta" lang="ta">{d.ta}</div>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </article>
            ) : (
              <article className={'dish text ' + (d.tone || '')} key={d.name}>
                <div className="big" aria-hidden="true">{d.glyph}</div>
                <div className="body">
                  <div className="ta" lang="ta">{d.ta}</div>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
