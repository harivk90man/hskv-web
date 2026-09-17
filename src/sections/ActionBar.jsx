import { site } from '../data/site.js'
import { Phone, WhatsApp, Pin } from '../icons.jsx'

// Phone-only bar: the three things a visitor actually does on a restaurant site.
export default function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Quick actions">
      <a className="call" href={site.phones[0].tel}><Phone />Call</a>
      <a className="wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp />WhatsApp</a>
      <a className="dir" href={site.maps.directions} target="_blank" rel="noopener noreferrer"><Pin />Directions</a>
    </nav>
  )
}
