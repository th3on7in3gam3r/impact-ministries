import { useState, type FormEvent } from 'react'
import { ChevronDown, MapPin, Clock, DoorOpen, Coffee, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import { AnimatedSection, staggerContainer, staggerItem } from '../components/AnimatedSection'

const visitSteps = [
  {
    icon: DoorOpen,
    step: '01',
    title: 'Arrive & Check In',
    description:
      'Park in our free lot and head to the main entrance. Our greeters will welcome you, help you check in any children, and show you to a seat.',
  },
  {
    icon: Coffee,
    step: '02',
    title: 'Enjoy Fellowship',
    description:
      'Arrive a few minutes early to grab coffee and meet some friendly faces in the lobby. We love connecting with new visitors!',
  },
  {
    icon: Users,
    step: '03',
    title: 'Worship Together',
    description:
      'Join us for worship, prayer, and a message from God\'s Word. The service typically lasts about 90 minutes.',
  },
]

const faqs = [
  {
    question: 'What should I wear?',
    answer:
      'Come as you are! There\'s no dress code at Impact Ministries. You\'ll see everything from jeans to business casual. We want you to feel comfortable and focus on worshipping God.',
  },
  {
    question: 'Where do I park?',
    answer:
      'Free parking is available in our main lot in front of the church. Overflow parking is across the street. Our parking team is on hand every Sunday to help direct you.',
  },
  {
    question: 'Is there childcare available?',
    answer:
      'Yes! We offer children\'s ministry for infants through 5th grade during Sunday morning worship. Check in at the welcome desk and our volunteers will guide your children to their classrooms.',
  },
  {
    question: 'How long is the service?',
    answer:
      'Our Sunday morning worship service typically lasts about 90 minutes, including worship, prayer, and the message. Bible study begins at 9:00 AM if you\'d like to come earlier.',
  },
  {
    question: 'Will I be singled out as a visitor?',
    answer:
      'We won\'t put you on the spot! While we may acknowledge first-time visitors with a warm welcome, we won\'t ask you to stand or speak publicly unless you\'d like to.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border border-stone-200 rounded-lg overflow-hidden bg-white"
      variants={staggerItem}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors"
        aria-expanded={open}
        aria-label={`${open ? 'Collapse' : 'Expand'} FAQ: ${question}`}
      >
        <span className="font-playfair text-lg font-semibold text-stone-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-church-purple shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 font-lato text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PlanAVisit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    visitDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', visitDate: '', message: '' })
  }

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1519491050282-cf00c82424f9?w=1920&q=80"
        title="Plan Your Visit"
        subtitle="Let us know you're coming — we'll save you a seat and make you feel at home."
      />

      <section className="py-20 px-4 bg-white">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Step by Step
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
          {visitSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="text-center"
            >
              <span className="font-playfair text-5xl font-bold text-church-purple/20">
                {step.step}
              </span>
              <step.icon className="w-10 h-10 text-church-purple mx-auto my-4" />
              <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-3">
                {step.title}
              </h3>
              <p className="font-lato text-stone-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-church-cream">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>
        <motion.div
          className="max-w-2xl mx-auto space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-8">
              Service Times & Location
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-church-purple mt-1 shrink-0" />
                <div>
                  <p className="font-lato font-semibold text-stone-900">Sunday Bible Study</p>
                  <p className="font-lato text-church-purple font-bold">9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-church-purple mt-1 shrink-0" />
                <div>
                  <p className="font-lato font-semibold text-stone-900">Sunday Morning Worship</p>
                  <p className="font-lato text-church-purple font-bold">10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-church-purple mt-1 shrink-0" />
                <div>
                  <p className="font-lato font-semibold text-stone-900">Wednesday Prayer & Word</p>
                  <p className="font-lato text-church-purple font-bold">7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-stone-200">
                <MapPin className="w-6 h-6 text-church-purple mt-1 shrink-0" />
                <div>
                  <p className="font-lato font-semibold text-stone-900">Address</p>
                  <p className="font-lato text-stone-600">
                    123 Faith Avenue
                    <br />
                    Your City, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-8">
              Let Us Know You&apos;re Coming
            </h2>
            {submitted ? (
              <div className="bg-church-cream rounded-lg p-8 text-center">
                <p className="font-lato text-church-purple font-semibold text-lg mb-2">
                  We can&apos;t wait to meet you!
                </p>
                <p className="font-lato text-stone-600 text-sm">
                  Thank you for letting us know. We&apos;ll be ready to welcome you with open arms.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="visit-name" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="visit-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="visit-email" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="visit-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent"
                    aria-label="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="visit-date" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                    Planned Visit Date
                  </label>
                  <input
                    type="date"
                    id="visit-date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent"
                    aria-label="Planned visit date"
                  />
                </div>
                <div>
                  <label htmlFor="visit-message" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                    Questions or Comments
                  </label>
                  <textarea
                    id="visit-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent resize-none"
                    aria-label="Questions or comments"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-church-purple text-white font-lato uppercase tracking-wider text-sm py-3.5 rounded-md hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
                  aria-label="Submit visit request"
                >
                  Submit
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="py-16 px-4 bg-church-purple-dark text-center">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-2">
          We Can&apos;t Wait to Meet You!
        </h2>
        <p className="font-script text-3xl text-church-gold">
          Making an Impact, One Life at a Time
        </p>
      </AnimatedSection>
    </>
  )
}
