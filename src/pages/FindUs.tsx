import { useState, type FormEvent } from 'react'
import { MapPin, Clock, Car, Accessibility } from 'lucide-react'
import { siteConfig, addressLines, images } from '../config/site'
import HeroSection from '../components/HeroSection'
import { AnimatedSection } from '../components/AnimatedSection'

const services = [
  { name: 'Sunday Morning Worship', time: '10:00 AM' },
  { name: 'Sunday Bible Study', time: '9:00 AM' },
  { name: 'Wednesday Prayer & Word', time: '7:00 PM' },
]

export default function FindUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <HeroSection
        backgroundImage={images.church}
        title="Find Us"
        subtitle="We'd love to see you. Here's how to get to Impact Ministries."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-church-purple mt-1 shrink-0" />
              <div>
                <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-2">
                  Our Location
                </h2>
                <p className="font-lato text-stone-600 leading-relaxed">
                  {addressLines[0]}
                  <br />
                  {addressLines[1]}
                  <br />
                  {siteConfig.address.country}
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full border-0"
                src={siteConfig.mapsEmbed}
                title="Impact Ministries location map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-church-purple" />
              <h2 className="font-playfair text-3xl font-bold text-stone-900">
                Service Times
              </h2>
            </div>
            <div className="space-y-4 mb-10">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex justify-between items-center bg-church-cream rounded-lg px-6 py-4"
                >
                  <span className="font-playfair font-semibold text-stone-900">
                    {service.name}
                  </span>
                  <span className="font-lato font-bold text-church-purple">
                    {service.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Car className="w-6 h-6 text-church-purple mt-1 shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                    Parking
                  </h3>
                  <p className="font-lato text-stone-600 text-sm leading-relaxed">
                    Free parking is available in our main lot directly in front of
                    the church building. Additional overflow parking is located
                    across the street. Our parking team will be happy to assist you
                    on Sundays.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Accessibility className="w-6 h-6 text-church-purple mt-1 shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                    Accessibility
                  </h3>
                  <p className="font-lato text-stone-600 text-sm leading-relaxed">
                    Our facility is fully wheelchair accessible with ramps, elevators,
                    and designated seating areas. Hearing assistance devices are
                    available at the welcome desk. Please let us know if you need
                    any special accommodations.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="py-20 px-4 bg-church-cream">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
              Get In Touch
            </p>
            <h2 className="font-playfair text-4xl font-bold text-stone-900">
              Contact Us
            </h2>
          </div>
          {submitted ? (
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <p className="font-lato text-church-purple font-semibold text-lg">
                Thank you for reaching out! We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent"
                  aria-label="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent"
                  aria-label="Your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-lato text-sm font-semibold text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 font-lato focus:outline-none focus:ring-2 focus:ring-church-purple focus:border-transparent resize-none"
                  aria-label="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-church-purple text-white font-lato uppercase tracking-wider text-sm py-3.5 rounded-md hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
                aria-label="Submit contact form"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </AnimatedSection>
    </>
  )
}
