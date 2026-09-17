import { site } from '../data/site.js'
import { Instagram, Phone, Pin } from '../icons.jsx'

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="lock">
              <img src="/logo-192.png" alt="" width="56" height="56" />
              <div>
                <div className="ta" lang="ta">{site.nameTa}</div>
                <div className="en">{site.name} · {site.city}</div>
              </div>
            </div>
            <p>{site.tagline}</p>
          </div>
          <div className="links">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram />{site.instagramHandle}</a>
            {site.phones.map((p) => <a key={p.tel} href={p.tel}><Phone />{p.label}</a>)}
            <a href={site.maps.directions} target="_blank" rel="noopener noreferrer"><Pin />{site.address.line1}, {site.address.line2}</a>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} {site.name}. Pure vegetarian since the early ’90s.</span>
          <span>Sri Amirthas Sweets &amp; Savouries is our own brand.</span>
        </div>
      </div>
    </footer>
  )
}
