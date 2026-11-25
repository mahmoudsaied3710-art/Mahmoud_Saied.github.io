import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { nav } from '../data.js'

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight"><span className="text-sky">M</span>ahmoud Saied<span className="text-sky">.</span></a>
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-sm text-muted transition-colors hover:text-sky">{label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted transition hover:border-sky/50 hover:text-sky" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted hover:text-sky lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-bg/95 px-5 pb-4 shadow-xl backdrop-blur-xl lg:hidden">
          {nav.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-muted transition hover:text-sky">{label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
