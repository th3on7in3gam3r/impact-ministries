import { Link } from 'react-router-dom'
import { DoorOpen, Music, Users, Baby } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { AnimatedSection, staggerContainer, staggerItem } from '../components/AnimatedSection'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: DoorOpen,
    title: 'Arrive',
    description:
      'Come as you are! Our greeters will welcome you at the door, help you find a seat, and answer any questions you may have.',
  },
  {
    icon: Music,
    title: 'Worship',
    description:
      'Experience heartfelt worship through music, prayer, and the preaching of God\'s Word in a warm, Spirit-filled atmosphere.',
  },
  {
    icon: Users,
    title: 'Connect',
    description:
      'Stay after service for fellowship, meet our pastors and members, and discover ways to get involved in our church family.',
  },
]

export default function Welcome() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&q=80"
        title="Welcome"
        subtitle="We're so glad you're here. Let us show you what to expect on your first visit."
      />

      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            First Time?
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-6">
            New Here?
          </h2>
          <p className="font-lato text-stone-600 leading-relaxed mb-4">
            We know visiting a new church can feel overwhelming, but at Impact
            Ministries, you&apos;ll be greeted with open arms. Our services typically
            last about 90 minutes and include worship, prayer, and a message from
            God&apos;s Word.
          </p>
          <p className="font-lato text-stone-600 leading-relaxed">
            There&apos;s no dress code — come as you are. Whether you prefer jeans or
            your Sunday best, you&apos;ll fit right in. We&apos;re a diverse family united
            by our love for Jesus.
          </p>
        </div>
      </AnimatedSection>

      <section className="py-20 px-4 bg-church-cream">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Your First Sunday
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            What to Expect
          </h2>
        </AnimatedSection>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <step.icon className="w-12 h-12 text-church-purple mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-3">
                {step.title}
              </h3>
              <p className="font-lato text-stone-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8 text-church-purple" />
              <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em]">
                Children & Youth
              </p>
            </div>
            <h2 className="font-playfair text-4xl font-bold text-stone-900 mb-6">
              For Families
            </h2>
            <p className="font-lato text-stone-600 leading-relaxed mb-4">
              We love families at Impact Ministries! Our children&apos;s ministry
              provides a safe, fun, and engaging environment for kids ages infant
              through 5th grade during Sunday morning worship.
            </p>
            <p className="font-lato text-stone-600 leading-relaxed mb-4">
              Check in at our welcome desk when you arrive, and our trained
              volunteers will guide your children to their age-appropriate
              classrooms. All volunteers are background-checked for your peace
              of mind.
            </p>
            <p className="font-lato text-stone-600 leading-relaxed">
              Youth programs for middle and high school students meet on Wednesday
              evenings and include worship, Bible study, and fellowship activities.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da724a02?w=800&q=80"
            alt="Children in Sunday school"
            className="rounded-lg shadow-xl w-full h-72 lg:h-80 object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-4 bg-church-purple-dark text-center">
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">
          Ready to Visit?
        </h2>
        <p className="font-lato text-white/80 mb-8 max-w-xl mx-auto">
          Let us know you&apos;re coming so we can prepare a warm welcome just for you.
        </p>
        <Link
          to="/plan-a-visit"
          className="inline-block bg-church-gold text-church-purple-dark font-lato uppercase tracking-wider text-sm font-bold px-8 py-3.5 rounded-md hover:scale-[1.05] transition-all duration-300"
          aria-label="Plan your first visit"
        >
          Plan Your First Visit
        </Link>
      </AnimatedSection>
    </>
  )
}
