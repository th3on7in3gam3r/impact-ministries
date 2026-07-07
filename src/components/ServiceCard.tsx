import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  name: string
  time: string
  description?: string
  index?: number
}

export default function ServiceCard({ name, time, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md border-t-4 border-church-purple p-6 text-center hover:shadow-lg transition-shadow duration-300"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
    >
      <Clock className="w-8 h-8 text-church-purple mx-auto mb-4" />
      <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
        {name}
      </h3>
      <p className="font-lato font-bold text-church-purple text-lg">{time}</p>
      {description && (
        <p className="font-lato text-stone-600 text-sm mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
