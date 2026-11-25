import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Project from './components/Project.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('mahmoud-portfolio-theme') || 'dark' }
    catch { return 'dark' }
  })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    try { localStorage.setItem('mahmoud-portfolio-theme', theme) } catch { /* storage may be unavailable */ }
  }, [theme])

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setShowTop(window.scrollY > 500)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent" aria-hidden="true">
        <div className="h-full bg-sky transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero /><About /><Skills /><Certifications /><Project /><Experience /><Education /><Contact />
      </main>
      <Footer />
      {showTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-surface text-ink shadow-glow transition hover:-translate-y-1 hover:text-sky">
          <ArrowUp size={19} />
        </button>
      )}
    </>
  )
}
