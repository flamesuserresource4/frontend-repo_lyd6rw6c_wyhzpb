import { useState, useEffect } from 'react'
import { Plane, Menu, X, Crown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:opacity-80 transition'

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToId('home')}
            className="flex items-center gap-2"
            aria-label="AetherJet Home"
          >
            <div className="relative">
              <Crown className="h-6 w-6 text-black" />
              <Plane className="absolute -right-3 -top-1 h-4 w-4 text-amber-500" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AetherJet</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => scrollToId('home')} className={linkClass}>Home</button>
            <button onClick={() => scrollToId('operators')} className={linkClass}>For Operators</button>
            <button onClick={() => scrollToId('about')} className={linkClass}>About Us</button>
            <button onClick={() => scrollToId('contact')} className="ml-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition">Contact Us</button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            <button onClick={() => scrollToId('home')} className="block w-full text-left px-2 py-2 text-gray-800">Home</button>
            <button onClick={() => scrollToId('operators')} className="block w-full text-left px-2 py-2 text-gray-800">For Operators</button>
            <button onClick={() => scrollToId('about')} className="block w-full text-left px-2 py-2 text-gray-800">About Us</button>
            <button onClick={() => scrollToId('contact')} className="block w-full text-left px-2 py-2 text-gray-800">Contact Us</button>
          </div>
        </div>
      )}
    </header>
  )
}
