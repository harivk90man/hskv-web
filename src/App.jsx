import { useEffect } from 'react'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Highlights from './sections/Highlights.jsx'
import Signature from './sections/Signature.jsx'
import Story from './sections/Story.jsx'
import MenuSection from './sections/MenuSection.jsx'
import Sweets from './sections/Sweets.jsx'
import Gallery from './sections/Gallery.jsx'
import Reviews from './sections/Reviews.jsx'
import Visit from './sections/Visit.jsx'
import Footer from './sections/Footer.jsx'
import ActionBar from './sections/ActionBar.jsx'

export default function App() {
  // gentle reveal as sections scroll into view. Fail-safe: anything already on screen shows at once,
  // and everything shows after 2.5s even if the observer never fires. Reduced motion handled in CSS.
  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')]
    const show = (el) => el.classList.add('in')
    let io = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target) } })
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 })
      els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) show(el); else io.observe(el) })
    } else {
      els.forEach(show)
    }
    const t = setTimeout(() => els.forEach(show), 2500)
    return () => { io?.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Signature />
        <Story />
        <MenuSection />
        <Sweets />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <ActionBar />
    </>
  )
}
