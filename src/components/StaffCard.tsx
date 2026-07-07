import { motion } from 'framer-motion'

interface StaffCardProps {
  name: string
  title: string
  bio: string
  imageUrl?: string
}

export default function StaffCard({ name, title, bio, imageUrl }: StaffCardProps) {
  return (
    <motion.div
      className="text-center max-w-sm mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden bg-stone-200 shadow-lg">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-church-purple/20 to-church-purple-dark/30">
            <span className="font-playfair text-5xl text-church-purple/40">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-1">
        {name}
      </h3>
      <p className="font-lato text-church-purple font-semibold text-sm uppercase tracking-wider mb-4">
        {title}
      </p>
      <p className="font-lato text-stone-600 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  )
}
