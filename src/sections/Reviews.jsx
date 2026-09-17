import { ratings, reviews, mentions } from '../data/site.js'
import { Star } from '../icons.jsx'

export default function Reviews() {
  return (
    <section className="section band" id="reviews">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Reviews</p>
          <h2 className="title">Thousands of visits, one verdict.</h2>
          <p className="lede">The most-reviewed restaurant in Chidambaram, and the rating has held for years.</p>
        </div>
        <div className="badges reveal">
          {ratings.map((r) => (
            <div className="badge" key={r.platform}>
              <span className="score"><Star />{r.score}</span>
              <span className="who"><b>{r.platform}</b>{r.count}</span>
            </div>
          ))}
        </div>
        <div className="quotes reveal">
          {reviews.map((r) => (
            <blockquote className="quote" key={r.name} style={{ margin: 0 }}>
              <div className="stars" aria-label="5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}</div>
              <p>“{r.text}”</p>
              <div className="by"><b>{r.name}</b> · {r.source}</div>
            </blockquote>
          ))}
        </div>
        <div className="mentions reveal">
          <span className="lab">What reviewers keep naming</span>
          <div className="chips">
            {mentions.map((m) => <span className="chip" key={m}>{m}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
