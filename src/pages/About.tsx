import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Users, Church, User } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { AnimatedSection, staggerContainer, staggerItem } from '../components/AnimatedSection'
import { pastor, images } from '../config/site'
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
              src={images.church}
              alt="Impact Ministries church building in Woburn, MA"
              className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover hover:scale-[1.02] transition-transform duration-500"
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
              we exist to impact lives with the gospel of Jesus Christ. Under the
              leadership of Pastor Robert Lugoloobi, our church has grown into a
              vibrant, Spirit-filled family in Woburn, Massachusetts.
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
              <p className="font-playfair text-xl font-semibold text-stone-800 leading-relaxed mb-4">
                Imacted by God to reach others for Christ
              </p>
              <p className="font-lato text-stone-600 leading-relaxed mb-4">
                We believe God transforms us first — and from that place of grace, we
                are called to share His love with everyone around us. Through worship,
                prayer, and the preaching of God&apos;s Word, we seek to lead people into
                a life-changing relationship with Jesus.
              </p>
              <p className="font-lato text-stone-600 leading-relaxed">
                Whether in Woburn or beyond, our heart is to serve, disciple, and
                reach souls with the Gospel — making an impact, one life at a time.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-church-gold h-full">
              <h3 className="font-playfair text-2xl font-bold text-church-gold mb-4">
                Our Vision
              </h3>
              <p className="font-playfair text-xl font-semibold text-stone-800 leading-relaxed mb-4">
                We exist to impact lives with the gospel of Jesus Christ
              </p>
              <p className="font-lato text-stone-600 leading-relaxed mb-4">
                Our vision is to see men, women, and children encounter the living
                God, be rooted in His Word, and grow into passionate followers of
                Jesus. We long to build a church that not only gathers, but goes —
                carrying the hope of the Gospel into homes, neighborhoods, and nations.
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

      <section className="py-20 px-4 bg-white">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Leadership
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Our Pastor
          </h2>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2 flex flex-col items-center">
                <div className="relative">
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl border-4 border-church-gold"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-church-purple text-white font-lato text-xs uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    {pastor.yearsOfMinistry} Years in Ministry
                  </span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-stone-900 mt-8 mb-1">
                  {pastor.name}
                </h3>
                <p className="font-lato text-church-purple font-semibold text-sm uppercase tracking-wider">
                  {pastor.title}
                </p>
              </div>

              <div className="lg:col-span-3">
                <p className="font-lato text-stone-600 leading-relaxed mb-4">
                  {pastor.bio}
                </p>
                <p className="font-lato text-stone-600 leading-relaxed mb-4">
                  Pastor Robert is married to <strong className="text-stone-800">{pastor.wife}</strong>,
                  and together they have shared {pastor.yearsMarried} wonderful years of marriage.
                  They are blessed with three sons who are a joy and inspiration to their family
                  and church community.
                </p>
                <p className="font-lato text-stone-600 leading-relaxed">
                  With over two decades of faithful service, Pastor Robert continues to lead
                  Impact Ministries with a heart for souls, a love for God&apos;s Word, and a
                  commitment to making an impact — one life at a time.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <h3 className="font-playfair text-2xl font-bold text-stone-900 text-center mb-8">
              The Lugoloobi Family
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={staggerItem}
                className="bg-church-cream rounded-lg p-6 text-center border-t-4 border-church-gold"
              >
                <Heart className="w-8 h-8 text-church-purple mx-auto mb-3" />
                <p className="font-lato text-xs uppercase tracking-wider text-church-purple mb-1">
                  Wife
                </p>
                <p className="font-playfair text-lg font-semibold text-stone-900">
                  {pastor.wife}
                </p>
                <p className="font-lato text-stone-500 text-sm mt-1">
                  {pastor.yearsMarried} years of marriage
                </p>
              </motion.div>
              {pastor.children.map((child) => (
                <motion.div
                  key={child.name}
                  variants={staggerItem}
                  className="bg-church-cream rounded-lg p-6 text-center border-t-4 border-church-purple"
                >
                  <User className="w-8 h-8 text-church-purple mx-auto mb-3" />
                  <p className="font-lato text-xs uppercase tracking-wider text-church-purple mb-1">
                    {child.label}
                  </p>
                  <p className="font-playfair text-lg font-semibold text-stone-900">
                    {child.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="py-16 px-4 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={images.church}
            alt="Impact Ministries church"
            className="w-full md:w-1/2 h-56 object-cover rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Church className="w-5 h-5 text-church-purple" />
              <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em]">
                Our Home
              </p>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-stone-900 mb-3">
              Visit Us in Woburn
            </h3>
            <p className="font-lato text-stone-600 leading-relaxed mb-4">
              Our church family gathers at 52 B Cummings Park in Woburn, Massachusetts.
              Whether you&apos;re new to the area or searching for a church home, you&apos;re
              always welcome here.
            </p>
            <Link
              to="/plan-a-visit"
              className="inline-block bg-church-purple text-white font-lato uppercase tracking-wider text-sm px-6 py-2.5 rounded-md hover:scale-[1.04] transition-all duration-300"
              aria-label="Plan your visit to Impact Ministries"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
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
