import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  backgroundImage: string
  label?: string
  title: string
  subtitle?: string
  tagline?: string
  location?: string
  fullHeight?: boolean
  showCTAs?: boolean
  overlayOpacity?: string
  scriptTitle?: string
}

export default function HeroSection({
  backgroundImage,
  label,
  title,
  subtitle,
  tagline,
  location,
  fullHeight = false,
  showCTAs = false,
  overlayOpacity = 'rgba(76, 29, 149, 0.55)',
  scriptTitle,
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]'
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Hero background"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayOpacity }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(30,10,60,0.55) 0%, rgba(30,10,60,0.35) 45%, rgba(30,10,60,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-32">
        {label && (
          <motion.p
            className="font-lato text-[#F5C542] text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          className={`font-playfair text-white font-bold leading-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] ${
            fullHeight
              ? 'text-[clamp(3rem,8vw,7rem)]'
              : 'text-[clamp(2.5rem,6vw,4.5rem)]'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>

        {scriptTitle && (
          <motion.p
            className="font-script text-[#F5C542] text-[clamp(2.5rem,6vw,5rem)] -mt-2 mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.75)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {scriptTitle}
          </motion.p>
        )}

        {fullHeight && (
          <motion.div
            className="flex items-center justify-center gap-4 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="h-px w-16 sm:w-24 bg-[#F5C542]" />
            <span className="text-[#F5C542] text-lg [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">✦</span>
            <div className="h-px w-16 sm:w-24 bg-[#F5C542]" />
          </motion.div>
        )}

        {tagline && (
          <motion.p
            className="font-lato italic text-white text-lg sm:text-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {tagline}
          </motion.p>
        )}

        {subtitle && (
          <motion.p
            className="font-lato text-white/90 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}

        {location && (
          <motion.p
            className="font-lato text-[#F5C542] text-xs sm:text-sm uppercase tracking-widest mt-4 mb-8 [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {location}
          </motion.p>
        )}

        {showCTAs && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to="/services"
              className="bg-church-purple text-white font-lato uppercase tracking-wider text-sm px-8 py-3.5 rounded-md hover:scale-[1.05] transition-all duration-300 hover:shadow-lg hover:shadow-church-purple/40"
              aria-label="View service times"
            >
              Service Times
            </Link>
            <Link
              to="/welcome"
              className="border-2 border-white text-white font-lato uppercase tracking-wider text-sm px-8 py-3.5 rounded-md hover:scale-[1.05] transition-all duration-300 hover:bg-white/10"
              aria-label="Learn what to expect as a first-time visitor"
            >
              First Time?
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
