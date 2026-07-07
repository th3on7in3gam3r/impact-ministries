import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface EventCardProps {
  date: string
  month: string
  title: string
  description: string
  index?: number
}

export default function EventCard({
  date,
  month,
  title,
  description,
  index = 0,
}: EventCardProps) {
  const direction = index % 2 === 0 ? -40 : 40

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="bg-church-purple text-white flex sm:flex-col items-center justify-center px-6 py-4 sm:py-8 sm:px-4 sm:w-24 shrink-0">
        <span className="font-playfair text-3xl font-bold">{date}</span>
        <span className="font-lato text-xs uppercase tracking-wider sm:mt-1 ml-2 sm:ml-0">
          {month}
        </span>
      </div>
      <div className="p-6 flex-1">
        <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
          {title}
        </h3>
        <p className="font-lato text-stone-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link
          to="/services"
          className="font-lato text-sm font-semibold text-church-purple hover:text-church-purple-light transition-colors"
          aria-label={`Learn more about ${title}`}
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  )
}
