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
  // gentle reveal as sections scroll into view; honours prefers-reduced-motion via CSS
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
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
