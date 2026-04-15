import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="h-10 w-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-bold shadow-soft group-hover:scale-110 transition-transform">
            SN
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-slate-900 text-lg">Shri Naina</div>
            <div className="text-xs text-slate-500 -mt-0.5">Enterprises</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="relative text-slate-700 hover:text-brand-600 font-medium transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-gradient after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="hidden lg:inline-flex btn-primary !py-2 !px-5 text-sm"
        >
          Contact Us
        </a>

        <button
          className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100"
          >
            <ul className="px-6 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block py-2 text-slate-700 font-medium hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNav(e, '#contact')}
                  className="btn-primary w-full"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
