import { useEffect, useState } from 'react'
import { site, nav } from '../data/site.js'
import { Phone, Menu, Close } from '../icons.jsx'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const h = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [open])

  return (
    <>
      <header className={'hdr' + (solid || open ? ' solid' : '')}>
        <div className="wrap">
          <a className="brand" href="#top" aria-label={site.name}>
            <img src="/logo-192.png" alt="" width="40" height="40" />
            <span>
              <span className="ta" lang="ta">{site.nameTa}</span><br />
              <span className="en">{site.kind} · {site.city}</span>
            </span>
          </a>
          <nav className="nav" aria-label="Sections">
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <div className="hdr-cta">
            <a className={'btn ' + (solid ? 'primary' : 'light')} href={site.phones[0].tel}><Phone />Call {site.phones[0].label}</a>
          </div>
          <button className="burger" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </header>
      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          <a className="btn primary" href={site.phones[0].tel}><Phone />Call {site.phones[0].label}</a>
        </div>
      )}
    </>
  )
}
