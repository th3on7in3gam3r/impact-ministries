import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'
import logo from '../assets/logo.jpeg'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Welcome', path: '/welcome' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Find Us', path: '/find-us' },
  { label: 'What We Believe', path: '/what-we-believe' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollPosition(50)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const isTransparentHero = isHome && !scrolled

  const getNavLinkClass = (path: string) => {
    const active = isActive(path)

    if (isTransparentHero) {
      return active
        ? 'text-[#F5C542] font-semibold underline underline-offset-4 decoration-2 decoration-[#F5C542] [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]'
        : 'text-white hover:text-[#F5C542] [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]'
    }

    return active
      ? 'text-church-purple font-semibold underline underline-offset-4 decoration-2'
      : 'text-stone-700 hover:text-church-purple'
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Impact Ministries International Inc. home"
          >
            <img
              src={logo}
              alt="Impact Ministries logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p
                className={`font-playfair font-bold text-lg leading-tight transition-colors ${
                  scrolled || !isHome ? 'text-church-purple' : 'text-white'
                }`}
              >
                IMPACT MINISTRIES
              </p>
              <p
                className={`font-lato text-[10px] uppercase tracking-widest transition-colors ${
                  scrolled || !isHome ? 'text-stone-600' : 'text-white/80'
                }`}
              >
                International Inc.
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-lato text-sm transition-colors duration-300 ${getNavLinkClass(link.path)}`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/plan-a-visit"
              className={`font-lato text-xs uppercase tracking-wider px-5 py-2.5 rounded-md hover:scale-[1.04] transition-all duration-300 ${
                isTransparentHero
                  ? 'bg-[#F5C542] text-church-purple-dark font-bold hover:shadow-lg hover:shadow-black/30'
                  : 'bg-church-purple text-white hover:shadow-lg hover:shadow-church-purple/30'
              }`}
              aria-label="Plan a visit to Impact Ministries"
            >
              Plan a Visit
            </Link>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || !isHome ? 'text-church-purple' : 'text-white'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <span className="font-playfair font-bold text-church-purple text-sm">
                    IMPACT MINISTRIES
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-stone-600 hover:text-church-purple"
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-lato text-lg py-3 px-4 rounded-md transition-colors ${
                      isActive(link.path)
                        ? 'text-church-purple bg-purple-50 font-semibold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/plan-a-visit"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 bg-church-purple text-white font-lato text-sm uppercase tracking-wider px-6 py-3 rounded-md text-center hover:scale-[1.04] transition-all duration-300"
                  aria-label="Plan a visit to Impact Ministries"
                >
                  Plan a Visit
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
