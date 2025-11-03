import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#explore', label: 'Explore' },
    { href: '#operators', label: 'Operators' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className={`sticky top-0 z-50 ${scrolled ? 'backdrop-blur-xl bg-black/40' : 'backdrop-blur-sm bg-black/20'} transition-colors` }>
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between text-white">
          <a href="#home" className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-emerald-300" />
            <span className="font-semibold tracking-tight">AetherJet</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 transition hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#explore" className="rounded-xl bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20">
              Book now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 space-y-2 overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3 text-white backdrop-blur">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <a href="#explore" onClick={() => setOpen(false)} className="block rounded-lg bg-white/10 px-3 py-2 text-center hover:bg-white/20">
                Book now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
