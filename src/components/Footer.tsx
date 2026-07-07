import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import logo from '../assets/logo.jpeg'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Welcome', path: '/welcome' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Find Us', path: '/find-us' },
  { label: 'What We Believe', path: '/what-we-believe' },
  { label: 'Plan a Visit', path: '/plan-a-visit' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1e0a3c] text-white border-t-2 border-church-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Impact Ministries logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-playfair font-bold text-lg text-white">
                  Impact Ministries
                </p>
                <p className="font-lato text-xs uppercase tracking-widest text-church-gold">
                  International Inc.
                </p>
              </div>
            </div>
            <p className="font-script text-2xl text-church-gold mb-3">
              Making an Impact, One Life at a Time
            </p>
            <p className="font-lato text-sm text-stone-300 leading-relaxed">
              A Spirit-filled community committed to the Word of God, prayer, and
              outreach — making a lasting impact in our community and the world.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold text-church-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-lato text-sm text-stone-300 hover:text-church-gold transition-colors"
                    aria-label={`Go to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold text-church-gold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-church-gold mt-0.5 shrink-0" />
                <span className="font-lato text-sm text-stone-300">
                  123 Faith Avenue
                  <br />
                  Your City, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-church-gold shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="font-lato text-sm text-stone-300 hover:text-church-gold transition-colors"
                  aria-label="Call Impact Ministries"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-church-gold shrink-0" />
                <a
                  href="mailto:info@impactministries.org"
                  className="font-lato text-sm text-stone-300 hover:text-church-gold transition-colors"
                  aria-label="Email Impact Ministries"
                >
                  info@impactministries.org
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-church-gold hover:text-church-gold transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-church-gold hover:text-church-gold transition-colors"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-church-gold hover:text-church-gold transition-colors"
                aria-label="Visit our YouTube channel"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center font-lato text-xs text-stone-500">
          © 2024 Impact Ministries International Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
