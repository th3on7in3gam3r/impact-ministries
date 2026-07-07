import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import { AnimatedSection } from '../components/AnimatedSection'

interface Belief {
  title: string
  summary: string
  detail: string
  scripture: string
}

const beliefs: Belief[] = [
  {
    title: 'The Holy Bible',
    summary: 'The inspired, infallible Word of God.',
    detail:
      'We believe the Bible, consisting of the Old and New Testaments, is the verbally inspired Word of God, without error in the original writings, and is the supreme and final authority in faith and life.',
    scripture: '2 Timothy 3:16-17; 2 Peter 1:20-21',
  },
  {
    title: 'The Holy Trinity',
    summary: 'One God in three persons: Father, Son, and Holy Spirit.',
    detail:
      'We believe in one God, eternally existing in three persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit. Each person of the Trinity is fully God, co-equal and co-eternal.',
    scripture: 'Matthew 28:19; John 1:1; 2 Corinthians 13:14',
  },
  {
    title: 'Salvation by Grace Through Faith',
    summary: 'Eternal life through faith in Jesus Christ alone.',
    detail:
      'We believe that salvation is a gift of God\'s grace, received through personal faith in the Lord Jesus Christ. It is not earned by works but is freely given to all who repent and believe.',
    scripture: 'Ephesians 2:8-9; John 3:16; Romans 10:9-10',
  },
  {
    title: 'The Power of Prayer',
    summary: 'Prayer is our vital connection to God.',
    detail:
      'We believe in the power of prayer as the believer\'s direct communication with God. Through prayer, we seek His will, intercede for others, and experience His presence and power in our lives.',
    scripture: 'James 5:16; Philippians 4:6-7; 1 Thessalonians 5:17',
  },
  {
    title: 'The Great Commission',
    summary: 'Called to make disciples of all nations.',
    detail:
      'We believe Jesus commanded His followers to go into all the world and preach the Gospel, baptizing and teaching all nations. Evangelism and missions are central to the mission of the church.',
    scripture: 'Matthew 28:18-20; Mark 16:15; Acts 1:8',
  },
  {
    title: 'The Holy Spirit',
    summary: 'The present-day ministry of the Holy Spirit.',
    detail:
      'We believe in the baptism of the Holy Spirit as a distinct experience empowering believers for service. The Holy Spirit indwells, guides, comforts, and equips every believer with spiritual gifts for the edification of the church.',
    scripture: 'Acts 1:8; 1 Corinthians 12:7-11; Galatians 5:22-23',
  },
  {
    title: 'The Church',
    summary: 'The body of Christ, called to worship and serve.',
    detail:
      'We believe the church is the body of Christ, composed of all true believers. The local church exists to worship God, edify believers, and reach the lost with the Gospel of Jesus Christ.',
    scripture: 'Ephesians 4:11-16; Hebrews 10:25; 1 Corinthians 12:12-27',
  },
  {
    title: 'The Return of Christ',
    summary: 'Jesus will return personally and visibly.',
    detail:
      'We believe in the personal, imminent return of our Lord Jesus Christ. At His return, the dead in Christ shall be raised, believers will be caught up to meet Him, and He will establish His eternal kingdom.',
    scripture: '1 Thessalonians 4:16-17; Revelation 22:12; Acts 1:11',
  },
]

function BeliefAccordion({ belief, index }: { belief: Belief; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      className="border border-stone-200 rounded-lg overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
        aria-expanded={open}
        aria-label={`${open ? 'Collapse' : 'Expand'} ${belief.title}`}
      >
        <div>
          <h3 className="font-playfair text-xl font-semibold text-stone-900">
            {belief.title}
          </h3>
          <p className="font-lato text-stone-600 text-sm mt-1">{belief.summary}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-church-purple shrink-0 ml-4 transition-transform duration-300 ${
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
            <div className="px-6 pb-6 border-t border-stone-100 pt-4">
              <p className="font-lato text-stone-600 leading-relaxed mb-4">
                {belief.detail}
              </p>
              <p className="font-lato text-sm text-church-purple font-semibold">
                Scripture: {belief.scripture}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function WhatWeBelieve() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1507692049790-de582cc9ef65?w=1920&q=80"
        title="What We Believe"
        subtitle="Our faith is rooted in the timeless truths of God's Word."
      />

      <AnimatedSection className="py-12 px-4 bg-church-purple-dark text-center">
        <p className="font-playfair italic text-2xl sm:text-3xl text-white max-w-3xl mx-auto">
          &ldquo;We are a people of the Word and the Spirit.&rdquo;
        </p>
      </AnimatedSection>

      <section className="py-20 px-4 bg-white">
        <AnimatedSection className="text-center mb-12">
          <p className="font-lato text-church-purple text-xs uppercase tracking-[0.3em] mb-3">
            Doctrine
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-900">
            Statement of Faith
          </h2>
          <p className="font-lato text-stone-600 mt-4 max-w-2xl mx-auto">
            The following statements represent the core beliefs of Impact Ministries
            International Inc. They guide our teaching, worship, and ministry.
          </p>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-4">
          {beliefs.map((belief, i) => (
            <BeliefAccordion key={belief.title} belief={belief} index={i} />
          ))}
        </div>
      </section>

      <AnimatedSection className="py-16 px-4 bg-church-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-4">
            Have Questions About Our Beliefs?
          </h2>
          <p className="font-lato text-stone-600 leading-relaxed">
            We welcome your questions! Our pastors and leadership team are always
            available to discuss matters of faith. Visit us on a Sunday, attend a
            newcomers class, or reach out through our contact page.
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
