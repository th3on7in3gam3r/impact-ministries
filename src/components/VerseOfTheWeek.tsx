import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'

interface VerseOfTheWeekProps {
  verse: string
  reference: string
}

export default function VerseOfTheWeek({ verse, reference }: VerseOfTheWeekProps) {
  return (
    <AnimatedSection className="bg-stone-100 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center relative">
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 font-playfair text-[8rem] text-church-purple opacity-20 leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-lato text-church-gold text-xs uppercase tracking-[0.3em] mb-6 relative z-10">
          Verse of the Week
        </p>
        <motion.blockquote
          className="font-playfair italic text-2xl sm:text-3xl text-stone-800 leading-relaxed relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {verse}
        </motion.blockquote>
        <p className="font-lato text-church-purple font-semibold mt-6 relative z-10">
          — {reference}
        </p>
      </div>
    </AnimatedSection>
  )
}
