import { Target, Eye, Heart, Users } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import StaffCard from '../components/StaffCard'
import { AnimatedSection, staggerContainer, staggerItem } from '../components/AnimatedSection'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Heart,
    title: 'Love',
    description:
      'We love God and love people unconditionally, reflecting the heart of Christ in all we do.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We pursue excellence in worship, ministry, and service, giving God our very best.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We believe life is better together and foster authentic relationships within the body of Christ.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    description:
      'We walk in honesty, transparency, and biblical accountability in every area of ministry.',
  },
]

export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&q=80"
        title="About Us"
        subtitle="Discover the heart and mission behind Impact Ministries International Inc."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80"
              alt="Church community gathering"
              className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
              Our Journey
            </p>
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-6">
              Our Story
            </h2>
            <p className="font-lato text-stone-600 leading-relaxed mb-4">
              Impact Ministries International Inc. was founded with a clear vision:
              we exist to impact lives with the gospel of Jesus Christ. What began as
              a small group of believers gathering in a living room has grown into
              a vibrant, multi-generational church family.
            </p>
            <p className="font-lato text-stone-600 leading-relaxed mb-4">
              From the very beginning, our focus has been on creating a place where
              people can encounter the living God, grow in their faith, and be
              equipped to impact their world. We believe the local church is God&apos;s
              primary instrument for transformation in communities.
            </p>
            <p className="font-lato text-stone-600 leading-relaxed">
              Today, Impact Ministries continues to reach across cultural and
              generational lines, united by our passion for the Gospel, the power
              of the Holy Spirit, and our commitment to serving others with the love
              of Christ.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-4 bg-church-cream">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Purpose
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Our Mission & Vision
          </h2>
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-church-purple h-full">
              <h3 className="font-playfair text-2xl font-bold text-church-purple mb-4">
                Our Mission
              </h3>
              <p className="font-lato text-stone-600 leading-relaxed">
                Imacted by God to rech others for Christ
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-church-gold h-full">
              <h3 className="font-playfair text-2xl font-bold text-church-gold mb-4">
                Our Vision
              </h3>
              <p className="font-lato text-stone-600 leading-relaxed mb-4">
                we exist to impact lives with the gospel of Jesus Christ
              </p>
              <p className="font-lato text-sm text-stone-500 italic leading-relaxed">
                &ldquo;Therefore go and make disciples of all nations, baptizing them in
                the name of the Father and of the Son and of the Holy Spirit, and
                teaching them to obey everything I have commanded you.&rdquo;
              </p>
              <p className="font-lato text-sm text-church-purple font-semibold mt-3">
                — Matthew 28:19-20
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Leadership
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Our Pastor
          </h2>
        </div>
        <StaffCard
          name="Pastor James Mitchell"
          title="Senior Pastor"
          bio="Pastor James has served Impact Ministries for over 15 years. With a heart for evangelism and discipleship, he leads our congregation with passion, integrity, and a deep love for God's Word. He and his wife, Sarah, have three children and are committed to building a church that impacts generations."
        />
      </AnimatedSection>

      <section className="py-20 px-4 bg-church-purple-dark">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-gold text-xs uppercase tracking-[0.3em] mb-3">
            What Guides Us
          </p>
          <h2 className="font-playfair text-4xl font-bold text-white">
            Our Values
          </h2>
        </AnimatedSection>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={staggerItem}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <value.icon className="w-10 h-10 text-church-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="font-lato text-stone-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
