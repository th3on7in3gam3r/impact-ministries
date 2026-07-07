import { Link } from 'react-router-dom'
import { siteConfig, addressLines } from '../config/site'
import { MapPin, Phone, Mail } from 'lucide-react'
import logo from '../assets/logo.jpeg'

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
                  {addressLines[0]}
                  <br />
                  {addressLines[1]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-church-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="font-lato text-sm text-stone-300 hover:text-church-gold transition-colors"
                  aria-label="Call Impact Ministries"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-church-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-lato text-sm text-stone-300 hover:text-church-gold transition-colors"
                  aria-label="Email Impact Ministries"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.youtube}
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
