import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig, addressLines } from '../config/site'
import {
  BookOpen,
  Cross,
  Heart,
  HandHeart,
  Globe,
  Flame,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import VerseOfTheWeek from '../components/VerseOfTheWeek'
import EventCard from '../components/EventCard'
import { AnimatedSection, staggerContainer, staggerItem } from '../components/AnimatedSection'

const services = [
  { name: 'Sunday Morning Worship', time: '10:00 AM' },
  { name: 'Sunday Bible Study', time: '9:00 AM' },
  { name: 'Wednesday Prayer & Word', time: '7:00 PM' },
]

const beliefs = [
  {
    icon: BookOpen,
    title: 'The Holy Bible',
    description:
      'We believe the Bible is the inspired, infallible Word of God and our final authority for faith and life.',
  },
  {
    icon: Cross,
    title: 'The Holy Trinity',
    description:
      'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.',
  },
  {
    icon: Heart,
    title: 'Salvation by Grace Through Faith',
    description:
      'We believe salvation is a gift of God received through faith in Jesus Christ alone.',
  },
  {
    icon: HandHeart,
    title: 'The Power of Prayer',
    description:
      'We believe prayer is our direct line to God and a vital part of the believer\'s life.',
  },
  {
    icon: Globe,
    title: 'The Great Commission',
    description:
      'We are called to go and make disciples of all nations, sharing the Gospel with the world.',
  },
  {
    icon: Flame,
    title: 'The Holy Spirit',
    description:
      'We believe in the present-day ministry of the Holy Spirit, empowering believers for service.',
  },
]

const events = [
  {
    date: '15',
    month: 'Dec',
    title: 'Christmas Celebration',
    description:
      'Join us for a special evening of worship, carols, and celebration of the birth of our Savior.',
  },
  {
    date: '01',
    month: 'Jan',
    title: 'New Year Prayer & Fasting',
    description:
      'Start the new year seeking God together through prayer, fasting, and consecration.',
  },
  {
    date: '20',
    month: 'Jan',
    title: 'Community Outreach Day',
    description:
      'Serve our neighbors through food distribution, prayer, and sharing the love of Christ.',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&q=80"
        label="✦ WELCOME TO ✦"
        title="Impact Ministries"
        scriptTitle="International Inc."
        tagline="Making an Impact, One Life at a Time"
        location={`JOIN US EVERY SUNDAY · ${siteConfig.address.city}, ${siteConfig.address.state}`}
        fullHeight
        showCTAs
      />

      <AnimatedSection className="bg-church-purple-dark py-12 px-4" direction="up">
        <p className="font-lato italic text-white text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed">
          &ldquo;A place where everyone is welcomed, loved, and transformed by the
          power of God.&rdquo;
        </p>
      </AnimatedSection>

      <section className="py-20 px-4 bg-white">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Join Us
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900">
            Worship With Us
          </h2>
        </AnimatedSection>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service, i) => (
            <motion.div key={service.name} variants={staggerItem}>
              <ServiceCard name={service.name} time={service.time} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-church-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
              alt="Congregation worshipping together"
              className="rounded-lg shadow-xl w-full h-80 lg:h-[28rem] object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="border-l-4 border-church-gold pl-8">
              <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
                Our Story
              </p>
              <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-6">
                Who We Are
              </h2>
              <p className="font-lato text-stone-600 leading-relaxed mb-4">
                Impact Ministries International Inc. is a Spirit-filled community
                committed to the Word of God, passionate prayer, and compassionate
                outreach. We exist to make a lasting impact in our community and
                around the world — one life at a time.
              </p>
              <p className="font-lato text-stone-600 leading-relaxed mb-4">
                Founded on the belief that every person matters to God, we welcome
                people from all walks of life to encounter His love, grow in faith,
                and discover their God-given purpose.
              </p>
              <p className="font-lato text-stone-600 leading-relaxed">
                Whether you&apos;re exploring faith for the first time or looking
                for a church home, you&apos;ll find a warm, welcoming family here at
                Impact Ministries.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <VerseOfTheWeek
        verse="For I can do everything through Christ, who gives me strength."
        reference="Philippians 4:13"
      />

      <section className="py-20 px-4 bg-white">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Faith & Doctrine
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900">
            Our Core Beliefs
          </h2>
        </AnimatedSection>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {beliefs.map((belief) => (
            <motion.div
              key={belief.title}
              variants={staggerItem}
              className="bg-church-cream rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <belief.icon className="w-10 h-10 text-church-purple mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                {belief.title}
              </h3>
              <p className="font-lato text-stone-600 text-sm leading-relaxed">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link
            to="/what-we-believe"
            className="font-lato text-church-purple font-semibold hover:text-church-purple-light transition-colors"
            aria-label="Read our full statement of faith"
          >
            Read Our Full Statement of Faith →
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F5F3FF]">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Calendar
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-900">
            Stay Connected
          </h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519491050282-cf00c82424f9?w=1920&q=80)',
          }}
          role="img"
          aria-label="People worshipping with raised hands"
        />
        <div className="absolute inset-0 bg-church-purple-dark/70" />
        <AnimatedSection className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            We&apos;d Love to Have You
          </h2>
          <p className="font-lato text-white/90 text-lg mb-8">
            Whether it&apos;s your first Sunday or your fiftieth, there&apos;s a
            place for you here.
          </p>
          <Link
            to="/plan-a-visit"
            className="inline-block bg-church-gold text-church-purple-dark font-lato uppercase tracking-wider text-sm font-bold px-8 py-3.5 rounded-md hover:scale-[1.05] transition-all duration-300 hover:shadow-lg"
            aria-label="Plan your visit to Impact Ministries"
          >
            Plan Your Visit →
          </Link>
        </AnimatedSection>
      </section>

      <AnimatedSection className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-church-purple mb-3" />
            <p className="font-lato text-stone-800 font-semibold mb-1">Location</p>
            <p className="font-lato text-stone-600 text-sm">
              {addressLines[0]}
              <br />
              {addressLines[1]}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-church-purple mb-3" />
            <p className="font-lato text-stone-800 font-semibold mb-1">Phone</p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="font-lato text-stone-600 text-sm hover:text-church-purple transition-colors"
              aria-label="Call Impact Ministries"
            >
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-church-purple mb-3" />
            <p className="font-lato text-stone-800 font-semibold mb-1">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-lato text-stone-600 text-sm hover:text-church-purple transition-colors"
              aria-label="Email Impact Ministries"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
