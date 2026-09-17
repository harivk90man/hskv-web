import { useState } from 'react'
import { gallery, reels, site } from '../data/site.js'
import { Play, Instagram } from '../icons.jsx'

// Reels stay as posters until tapped, then load Instagram's own embed — nothing heavy on first paint.
function Reel({ r }) {
  const [on, setOn] = useState(false)
  return (
    <figure className="shot reel wide">
      {on ? (
        <iframe src={`https://www.instagram.com/reel/${r.code}/embed/`} title={r.title} allow="autoplay; encrypted-media" allowFullScreen loading="lazy" />
      ) : (
        <>
          <img src={r.poster} alt={r.title} loading="lazy" decoding="async" />
          <button className="play" onClick={() => setOn(true)} aria-label={`Play reel: ${r.title}`}><span className="ring"><Play /></span></button>
          <figcaption className="cap">{r.title}</figcaption>
        </>
      )}
    </figure>
  )
}

export default function Gallery() {
  // alternate reel, photo, reel, photo… so the tall reels spread across the grid
  const items = []
  const g = [...gallery], r = [...reels]
  while (g.length || r.length) {
    if (r.length) items.push({ kind: 'reel', ...r.shift() })
    if (g.length) items.push({ kind: 'photo', ...g.shift() })
  }

  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Gallery</p>
          <h2 className="title">From the kitchen, the counter and the table.</h2>
          <p className="lede">Photos and reels from our Instagram, {site.instagramHandle}.</p>
        </div>
        <div className="masonry reveal">
          {items.map((it) => it.kind === 'reel'
            ? <Reel key={'r' + it.code} r={it} />
            : <figure className="shot" key={it.src}><img src={it.src} alt={it.alt} loading="lazy" decoding="async" style={it.pos ? { objectPosition: it.pos } : undefined} /></figure>)}
        </div>
        <div className="ig-foot reveal">
          <a className="btn soft" href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram />Follow {site.instagramHandle}</a>
          <span className="lede" style={{ fontSize: 15 }}>Festival specials and daily plates go up there first.</span>
        </div>
      </div>
    </section>
  )
}
