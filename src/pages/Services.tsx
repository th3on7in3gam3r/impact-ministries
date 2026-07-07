import { Play } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import EventCard from '../components/EventCard'
import { AnimatedSection, staggerContainer, staggerItem } from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/site'

const detailedServices = [
  {
    name: 'Sunday Morning Worship',
    time: '10:00 AM',
    description:
      'Our main worship service features contemporary and traditional music, prayer, and a biblically-based message. Dress is casual to semi-formal — come as you are. Service lasts approximately 90 minutes.',
  },
  {
    name: 'Sunday Bible Study',
    time: '9:00 AM',
    description:
      'Join us for in-depth Bible study in small group settings before the main service. Classes are available for all ages, from children to adults. A great way to grow deeper in God\'s Word.',
  },
  {
    name: 'Wednesday Prayer & Word',
    time: '7:00 PM',
    description:
      'Midweek service focused on prayer, worship, and teaching. We gather to seek God together, intercede for our community, and be refreshed by His presence.',
  },
]

const specialEvents = [
  {
    date: '24',
    month: 'Dec',
    title: 'Christmas Eve Candlelight Service',
    description:
      'A beautiful evening of carols, scripture readings, and candlelight worship celebrating the birth of Christ.',
  },
  {
    date: '31',
    month: 'Dec',
    title: 'New Year\'s Eve Watch Night',
    description:
      'Ring in the new year with prayer, praise, and prophetic declarations over the year ahead.',
  },
  {
    date: '14',
    month: 'Feb',
    title: 'Marriage & Family Conference',
    description:
      'A special weekend conference strengthening marriages and families through biblical teaching and fellowship.',
  },
]

export default function Services() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1519491050282-cf00c82424f9?w=1920&q=80"
        title="Services"
        subtitle="Join us for worship, prayer, and the Word of God."
      />

      <section className="py-20 px-4 bg-white">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Weekly Gatherings
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Service Times
          </h2>
        </AnimatedSection>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {detailedServices.map((service, i) => (
            <motion.div key={service.name} variants={staggerItem}>
              <ServiceCard
                name={service.name}
                time={service.time}
                description={service.description}
                index={i}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatedSection className="py-20 px-4 bg-church-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
              Watch From Home
            </p>
            <h2 className="font-playfair text-4xl font-bold text-stone-900">
              Online Services
            </h2>
            <p className="font-lato text-stone-600 mt-4 max-w-2xl mx-auto">
              Can&apos;t make it in person? Join us live online every Sunday at 10:00 AM
              or watch past messages on our YouTube channel.
            </p>
          </div>
          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-video bg-church-purple-dark rounded-lg overflow-hidden shadow-lg group relative"
            aria-label="Watch Impact Ministries on YouTube"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">
                Impact Ministries International
              </h3>
              <p className="font-lato text-white/80 text-sm">
                Watch sermons, worship, and messages on our YouTube channel
              </p>
              <span className="mt-6 font-lato text-church-gold text-sm uppercase tracking-wider font-semibold group-hover:underline">
                Visit Our Channel →
              </span>
            </div>
          </a>
        </div>
      </AnimatedSection>

      <section className="py-20 px-4 bg-[#F5F3FF]">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Mark Your Calendar
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Special Events
          </h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-6">
          {specialEvents.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
