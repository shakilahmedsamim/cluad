import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Results', href: '/#results' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const handleAnchor = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-[#07070f]/90 backdrop-blur-xl border-b border-[#00e5a0]/10'
            : 'bg-white/90 backdrop-blur-xl border-b border-ink-200/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-[#00e5a0] rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#00e5a0] font-mono font-bold text-sm">TX</span>
            </div>
          </div>
          <span className={`font-display font-700 text-base tracking-tight ${isDark ? 'text-white' : 'text-ink-800'}`}>
            tracking<span className="text-[#00e5a0]">expert</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleAnchor(e, link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-white/5'
                  : 'text-ink-500 hover:text-ink-800 hover:bg-ink-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-white/8' : 'text-ink-400 hover:text-ink-700 hover:bg-ink-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            onClick={e => handleAnchor(e, '/#contact')}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#00e5a0] text-[#07070f] rounded-lg text-sm font-semibold font-display hover:bg-[#00cc8f] transition-colors duration-200"
          >
            Book Free Audit
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-white/8' : 'text-ink-400 hover:text-ink-700 hover:bg-ink-100'
            }`}
          >
            <div className="w-4 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-t ${
              isDark ? 'bg-[#0d0d20]/95 border-white/5' : 'bg-white/95 border-ink-100'
            } backdrop-blur-xl`}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleAnchor(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    isDark ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={e => handleAnchor(e, '/#contact')}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-2 px-4 py-3 bg-[#00e5a0] text-[#07070f] rounded-lg text-sm font-semibold text-center"
              >
                Book Free Audit
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
